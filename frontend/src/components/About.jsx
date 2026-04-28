import React from 'react';
import { Linkedin } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a software engineer with a passion for building developer productivity tools and internal platforms that scale across large engineering organizations. Over the past year, I've worked across infrastructure, GenAI, and developer experience — contributing to production systems that directly improve how hundreds of engineers work every day.
            </p>
            <p className="about-description">
              My work spans the full stack, from building React-based developer portals with Backstage to designing scalable backend services with Node.js and deploying infrastructure on AWS and Kubernetes. I've integrated LLMs into production workflows, built custom GitHub Copilot extensions, and worked extensively with modern AI tooling including RAG, prompt engineering, and the Model Context Protocol.
            </p>
            <p className="about-description">
              I'm particularly interested in the intersection of AI and developer experience — creating tools that make engineering teams more productive, reduce cognitive load, and enable self-service workflows at scale.
            </p>
            <a 
              href="https://www.linkedin.com/in/shabarish-vemula-626ab8153/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <Linkedin size={20} />
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
