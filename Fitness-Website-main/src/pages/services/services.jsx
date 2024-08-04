import React from 'react';
import './services.css'; // Ensure your CSS file is imported for styling
import serviceIcon1 from '../../assets/images/pro1.jpg'; // Example icon
import serviceIcon2 from '../../assets/images/pro2.jpg'; // Example icon
import serviceIcon3 from '../../assets/images/pro3.jpg'; // Example icon

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <img src={serviceIcon1} alt="Service 1" className="service-icon" />
            <h3>Personal Training</h3>
            <p>Get one-on-one training sessions with our expert trainers to achieve your perfect fitness goals.</p>
          </div>
          <div className="service-item">
            <img src={serviceIcon2} alt="Service 2" className="service-icon" />
            <h3>Group Classes</h3>
            <p>Join our dynamic group classes to stay motivated and have fun with others while working out.</p>
          </div>
          <div className="service-item">
            <img src={serviceIcon3} alt="Service 3" className="service-icon" />
            <h3>Nutrition Plans</h3>
            <p>Receive customized nutrition plans to complement your workout routine and achieve optimal results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
