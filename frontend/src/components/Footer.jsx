import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Shabarish Vemula. All rights reserved.
          </p>
          <p className="footer-subtitle">
            Built with React • Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
