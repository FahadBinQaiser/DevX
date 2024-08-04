// src/components/program-section/ProgramSection.jsx

import React, { useState } from 'react';
import './programs.css';

const ProgramSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  
  const programs = [
    {
      title: 'Cardio Strength',
      description: 'Combine cardiovascular exercise with strength training for a comprehensive workout that boosts both heart health and muscle strength.'
    },
    {
      title: 'Fat Loss',
      description: 'Reduce body fat by burning more calories than you consume through diet and exercise.'
    },
    {
      title: 'Muscle Gain',
      description: 'Build muscle by engaging in strength training exercises and consuming adequate protein to support muscle growth and repair.'
    },
    {
      title: 'Nutrition',
      description: 'Nutrition involves consuming a balanced diet that provides adequate nutrients to support overall health and well-being.'
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? programs.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === programs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="program-section">
      <h2 className="program-heading">Explore Our Program</h2>
      <div className="program-cards">
        {programs.map((program, index) => (
          <div key={index} className={`program-card ${index === activeIndex ? 'active' : ''}`}>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={handlePrev}>←</button>
        <button className="nav-button" onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default ProgramSection;
