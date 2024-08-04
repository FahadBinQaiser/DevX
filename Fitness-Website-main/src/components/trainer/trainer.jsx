import React from 'react';
import './trainer.css';
import trainer1 from '../../assets/images/pro1.jpg';
import trainer2 from '../../assets/images/pro2.jpg';
import trainer3 from '../../assets/images/pro3.jpg';

const trainers = [
  { name: 'Esther Howard', image: trainer1 },
  { name: 'Leslie Alexander', image: trainer2 },
  { name: 'Jacob Jones', image: trainer3 },
];

const TrainersSection = () => {
  return (
    <div className="trainers-section">
      <h2 className="trainers-heading">Get to Know Our Team of <span className="highlight">Experienced</span> Trainers</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => {
          const [firstName, ...lastName] = trainer.name.split(' ');
          return (
            <div key={index} className="trainer">
              <img src={trainer.image} alt={trainer.name} />
              <p>
                <span className="highlight">{firstName}</span> {lastName.join(' ')}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainersSection;
