import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// import Dropdown from './Dropdown';

function Header() {
  return (
    <header className="sticky-header">
      <nav>
        <ul className="hor-list">
          <li><Link to="/Portfolio">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;