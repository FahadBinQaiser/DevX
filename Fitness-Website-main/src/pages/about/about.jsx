import React from 'react';
import './about.css'; // Ensure your CSS file is imported for styling
import gymImage from '../../assets/images/pro2.jpg'; // Adjusted import path

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-h2">About Us</h2>
          <p>
            Welcome to <span className="highlight">PEAKFITNESS</span>, where fitness meets innovation. We are dedicated to providing the best and latest gym machines, equipment, and accessories at competitive prices. Our mission is to empower our customers to achieve their fitness goals with top-quality products that enhance performance and deliver results. At PEAKFITNESS, we believe in making fitness accessible to everyone, ensuring you can enjoy a healthier lifestyle without compromise.
          </p>
        </div>
        <div className="about-image">
          <img src={gymImage} alt="Gym" />
        </div>
      </div>
    </section>
  );
};

export default About;
