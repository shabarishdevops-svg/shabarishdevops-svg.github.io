import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to interesting conversations and new opportunities. Feel free to reach out!
          </p>
          <div className="contact-methods">
            <a href="mailto:shabarish.devops@gmail.com" className="contact-card">
              <Mail size={28} className="contact-icon" />
              <div className="contact-info">
                <h3 className="contact-label">Email</h3>
                <p className="contact-value">shabarish.devops@gmail.com</p>
              </div>
            </a>
            <a href="tel:503-421-4570" className="contact-card">
              <Phone size={28} className="contact-icon" />
              <div className="contact-info">
                <h3 className="contact-label">Phone</h3>
                <p className="contact-value">503-421-4570</p>
              </div>
            </a>
            <a 
              href="https://github.com/shabarishdevops-svg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <Github size={28} className="contact-icon" />
              <div className="contact-info">
                <h3 className="contact-label">GitHub</h3>
                <p className="contact-value">shabarishdevops-svg</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
