import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">Shabarish Vemula</h1>
          <p className="hero-subtitle">Senior Software Engineer</p>
          <p className="hero-description">
            Building developer productivity tools and internal platforms that scale across large engineering organizations.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button className="btn btn-secondary" onClick={scrollToAbout}>
              Learn More
            </button>
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
