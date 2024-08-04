import React, { useEffect, useRef } from 'react';
import './home.css';
import gymManImage from '../../assets/images/gym-man.png';
import Programs from '../programs/programs';
import FitnessExperience from '../../components/fitness-experience/FitnessExperience';
import Features from '../../components/features/features';
import Trainers from '../../components/trainer/trainer';
import MembershipCard from '../../components/memberShipbox/MembershipBox';
import Download from '../../components/download/download';
import Footer from '../../components/footer/footer';

const Home = () => {
  const componentsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });

    // Copy ref values to a variable
    const elements = componentsRef.current;

    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []); // Empty dependency array to run only once

  return (
    <main>
      <div className="container">
        <img src={gymManImage} alt="" className="muscle-man" />
        <h1 className="midheading">
          Discover Your <span className="highlight">Strength</span>, Define Your <span className="highlight">Fitness</span> <br />
          <span className="center">Level Up Your <span className="highlight">Health</span> Journey Today.</span>
        </h1>
      </div>
      <div className="hidden" ref={el => componentsRef.current[0] = el}><Programs /></div>
      <div className="hidden" ref={el => componentsRef.current[1] = el}><FitnessExperience /></div>
      <div className="hidden" ref={el => componentsRef.current[2] = el}><Features /></div>
      <div className="hidden" ref={el => componentsRef.current[3] = el}><Trainers /></div>
      <div className="hidden" ref={el => componentsRef.current[4] = el}><MembershipCard /></div>
      <div className="hidden" ref={el => componentsRef.current[5] = el}><Download /></div>
      <div className="hidden" ref={el => componentsRef.current[6] = el}><Footer /></div>
    </main>
  );
};

export default Home;
