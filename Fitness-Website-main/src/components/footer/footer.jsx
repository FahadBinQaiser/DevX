import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h2><span className="highlight">PEAKFITNESS</span></h2>
        <p>Elevate Your <span className="highlight">Fitness</span> Journey With Our Expert Guidance And Personalized Programs. Achieve Your Goals, One Rep At A Time. Join Us Today And Unleash Your Full Potential.</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/fahaddev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:fahadbinqaiser3@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>  
        </div>
      </div>
      <div className="footer-column">
        <h3>ABOUT</h3>
        <ul>
          <li><a href="#">Company</a></li>
          <li><a href="#">Quality Guarantee</a></li>
          <li><a href="#">Store Locations</a></li>
          <li><a href="#">Sustainability</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>SUPPORT</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Promotions & Sale</a></li>
          <li><a href="#">Track Order</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>LINKS</h3>
        <ul>
          <li><a href="#">Sneakers</a></li>
          <li><a href="#">Leather Shoes</a></li>
          <li><a href="#">Sports Shoes</a></li>
          <li><a href="#">Running Shoes</a></li>
          <li><a href="#">Brogue Shoes</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
