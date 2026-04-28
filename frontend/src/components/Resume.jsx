import React from 'react';
import { Download, FileText } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <div className="section-divider"></div>
        </div>
        <div className="resume-content">
          <div className="resume-card">
            <FileText size={48} className="resume-icon" />
            <h3 className="resume-subtitle">Want the full picture?</h3>
            <p className="resume-description">
              Download my resume for a complete look at my experience, education, and technical skills.
            </p>
            <ul className="resume-highlights">
              <li>Software Engineer with expertise in developer productivity tools</li>
              <li>Full-stack development (React, Node.js, TypeScript, Python)</li>
              <li>Cloud infrastructure & Kubernetes experience</li>
              <li>GenAI & LLM integration specialist</li>
            </ul>
            <a 
              href="/resume.pdf" 
              download="Shabarish_Vemula_Resume.pdf"
              className="download-btn"
            >
              <Download size={20} />
              Download Resume
            </a>
            <p className="resume-note">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;