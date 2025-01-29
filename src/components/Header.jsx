import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ onResetParticles }) {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <nav className="nav-container">
          <ul className="hor-list">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <button className="header-button" onClick={onResetParticles}>
          Reset Particles
        </button>
      </div>
    </header>
  );
}

export default Header;