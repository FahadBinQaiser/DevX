// src/components/fitness-experience/FitnessExperience.jsx

import React from 'react';
import './FitnessExperience.css';
import muscleMaxImage from '../../assets/images/sportive-man-s-body-dark-wall.jpg';
import coreCrusherImage from '../../assets/images/strong-man-back-black-white.jpg';

const FitnessExperience = () => {
  return (
    <section className="fitness-experience">
      <div className="header">
        <span className="tag">Our Classes</span>
        <h2>Dive Into Our Dynamic Fitness Experience</h2>
      </div>
      <div className="content">
        <div className="card">
          <img src={muscleMaxImage} alt="Muscle Max" />
          <div className="card-info">
            <h3>Muscle Max</h3>
            <p>Maximize Muscle Growth Through Resistance Training, Protein Intake, And Adequate Rest.</p>
          </div>
          <div className="stats">
            <div className="stat">
              <span className="icon">❤️</span>
              <span className="value">124 BPM</span>
            </div>
            <div className="stat">
              <span className="icon">🔥</span>
              <span className="value">4441 Kcal</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={coreCrusherImage} alt="Core Crusher" />
          <div className="card-info">
            <h3>Core Crusher</h3>
            <p>Intense Core-Focused Workout Aimed At Strengthening And Toning Abdominal And Back Muscles.</p>
          </div>
          <div className="stats">
            <div className="stat">
              <span className="icon">❤️</span>
              <span className="value">124 BPM</span>
            </div>
            <div className="stat">
              <span className="icon">🔥</span>
              <span className="value">4441 Kcal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessExperience;
