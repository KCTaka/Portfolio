import React from 'react';
import './About.css';

function About() {
  return (
    <div className="information">
      <h1>About Page</h1>
      <p>Learn more about me on this page. </p>
      <p>This website still has a lot to work on. I've started working on this site on Jaunuary 27th, 2025. Although I have experience with React.js and Three.js, I never had fully developed a site all on my own. This portfolio is not only a website with accomplishments I am proud of but a method to improve my understanding in web development. I am a eager and fast learner and would love to tackle challenges that incites my interests. </p> 
      <h2>Things I'd like to do on this page</h2>
      <ul>
        <li> Add particles at the same rate as getting deleted. Particles should be deleted if it touches the mouse position within a certain threshold distance.</li>
        <li> Add a new particle system with less but more orbital. Note this will also require a toggle between different particle systems.</li>
        <li> Include a webapp that enables me to list/organize things I'd wanna do on different projects </li>
        <li> Use different texture on highlighted words for visual clarity </li>
        <li> Allow the website to be accessed from https://kctaka.github.io with or without the /Project path</li>
        <li> Add progress bar and how I am doing in each project in progress </li>
      </ul>
    </div>
  );
}

export default About;