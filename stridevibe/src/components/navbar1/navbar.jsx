import React, { useEffect } from 'react';
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector('.container');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    const dropdownToggles = document.querySelectorAll('.dropdown .dropbtn');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    };

    const handleDropdownToggle = (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdownContent = e.target.nextElementSibling;
        dropdownContent.classList.toggle('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    hamburger.addEventListener('click', toggleMenu);
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', handleDropdownToggle);
    });

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      hamburger.removeEventListener('click', toggleMenu);
      dropdownToggles.forEach(toggle => {
        toggle.removeEventListener('click', handleDropdownToggle);
      });
    };
  }, []);

  return (
    <div className="container">
      <h1>StrideVibe</h1>
      <ul className="nav">
        <li><a href="#">New Arrivals</a></li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Men <i className="fas fa-angle-down"></i></a>
          <div className="dropdown-content">
            <a href="#">Casual</a>
            <a href="#">Formal</a>
            <a href="#">Athletic</a>
            <a href="#">Boots</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Women <i className="fas fa-angle-down"></i></a>
          <div className="dropdown-content">
            <a href="#">Casual</a>
            <a href="#">Formal</a>
            <a href="#">Athletic</a>
            <a href="#">Boots</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Kids <i className="fas fa-angle-down"></i></a>
          <div className="dropdown-content">
            <a href="#">Boys</a>
            <a href="#">Girls</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Collections <i className="fas fa-angle-down"></i></a>
          <div className="dropdown-content">
            <a href="#">Summer Collection</a>
            <a href="#">Winter Collection</a>
            <a href="#">Limited Edition</a>
            <a href="#">Sustainable Line</a>
          </div>
        </li>
        <li><a href="#"><i className="fas fa-search"></i></a></li>
        <li><a href="#"><i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </a></li>
        <li><a href="#"><i className="fas fa-user"></i></a></li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
