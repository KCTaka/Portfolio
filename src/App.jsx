import './App.css'
import React, { useRef } from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Header from './components/Header';
import Footer from './components/Footer';
import ThreeBackground from './background/ThreeBackground';

function App() {
  const threeBackgroundRef = useRef();

  const handleResetParticles = () => {
    if (threeBackgroundRef.current) {
      threeBackgroundRef.current.resetParticles();
    }
  };

  return (
    <div className="App">
      <ThreeBackground ref={threeBackgroundRef} />
      <Header onResetParticles={handleResetParticles} />
      <main className="Pages">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
