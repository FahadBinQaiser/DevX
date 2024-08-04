import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>PeakFitness</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/programs">Programs</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    </>
    
  );
};

export default Navbar;