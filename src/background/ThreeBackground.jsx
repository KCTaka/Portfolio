import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer';


const ThreeBackground = forwardRef((props, ref) => {
  const mountRef = useRef(null);
  const dtPositionRef = useRef(null);
  const gpuComputeRef = useRef(null);
  const positionVariableRef = useRef(null);

  useImperativeHandle(ref, () => ({
    resetParticles: () => {
      if (dtPositionRef.current) {
        const posArray = dtPositionRef.current.image.data;
        for (let i = 0; i < posArray.length; i += 4) {
          posArray[i] = Math.random() * 2 - 1;
          posArray[i + 1] = Math.random() * 2 - 1;
          posArray[i + 2] = 0;
          posArray[i + 3] = 1;
        }
        dtPositionRef.current.needsUpdate = true;
        gpuComputeRef.current.renderTexture(
          dtPositionRef.current,
          positionVariableRef.current.renderTargets[0]
        );
      }
    }
  }));

  useEffect(() => {
    // Shaders
    const computeShaderPosition = `
      uniform vec2 uMouse;
      uniform float time;

      // Random function
      float rand(vec2 co) {
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          vec4 pos = texture2D(texturePosition, uv);
          
          // Calculate direction to mouse
          vec2 direction = uMouse - pos.xy;
          float dist = length(direction);
          
          // Update position based on mouse influence
          if (dist > 0.01) {
              direction = normalize(direction);
              pos.xy += direction * 0.001 * (1.0 / dist);
          }
          
          // Add some randomness
          pos.xy += (vec2(rand(uv + time), rand(uv + time + 1.0)) - 0.5) * 0.002;
          
          // Keep particles within bounds
          pos.xy = clamp(pos.xy, vec2(-1.0), vec2(1.0));
          
          gl_FragColor = pos;
      }
    `;

    const particleVertexShader = `
      uniform sampler2D positionTexture;
      
      void main() {
          vec4 posTemp = texture2D(positionTexture, uv);
          vec3 pos = posTemp.xyz;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = 2.0;
      }
    `;

    // Scene setup
    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 1000);
    camera.position.z = 3;
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // Enable transparency
      antialias: true, // Smooth edges
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    scene.background = null; // Ensure transparent background

    // Add lights
    const light = new THREE.AmbientLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);

    // Initialize particle positions
    const textureWidth = width;
    const textureHeight = height;
    const particleCount = 10000;
    
    const gpuCompute = new GPUComputationRenderer(textureWidth, textureHeight, renderer);
    const dtPosition = gpuCompute.createTexture();
    dtPositionRef.current = dtPosition;
    gpuComputeRef.current = gpuCompute;
    
    // Fill initial position texture
    const posArray = dtPosition.image.data;
    for (let i = 0; i < posArray.length; i += 4) {
      posArray[i] = Math.random() * 2 - 1; // x
      posArray[i + 1] = Math.random() * 2 - 1; // y
      posArray[i + 2] = 0; // z
      posArray[i + 3] = 1; // w
    }

    const positionVariable = gpuCompute.addVariable('texturePosition', computeShaderPosition, dtPosition);
    positionVariableRef.current = positionVariable;
    gpuCompute.setVariableDependencies(positionVariable, [positionVariable]);
    
    // Add uniforms
    positionVariable.material.uniforms.uMouse = { value: new THREE.Vector2(0, 0) };
    positionVariable.material.uniforms.time = { value: 0 };

    const error = gpuCompute.init();
    if (error !== null) {
      console.error(error);
    }

    // Create particle system
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const uvs = new Float32Array(particleCount * 2);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const i2 = i * 2;
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;
      
      uvs[i2] = (i % textureWidth) / textureWidth;
      uvs[i2 + 1] = Math.floor(i / textureWidth) / textureHeight;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.5, 0.5, 0.5, 0.6);
        }
      `,
      uniforms: {
        positionTexture: { value: null }
      },
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    document.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      positionVariable.material.uniforms.uMouse.value.set(mouse.x, mouse.y);
    });

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      requestAnimationFrame(animate);
      
      // Update uniforms
      positionVariable.material.uniforms.time.value = time;
      
      gpuCompute.compute();
      
      // Update particle positions from GPU computation
      const positionTexture = gpuCompute.getCurrentRenderTarget(positionVariable).texture;
      particleMaterial.uniforms.positionTexture.value = positionTexture;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = 1; // width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="ThreeBackground"
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'fixed', 
        top: 0, 
        left: 0
      }} 
    />
  );
});

export default ThreeBackground;