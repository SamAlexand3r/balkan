// Footer.js
import React from 'react';
import './Footer.css';
import epicurusLogo from './assets/epicurus-logo.png'; // Замените на путь к вашему логотипу

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 LLS Epicurus. All rights reserved.</p>
      </div>
      <a href="https://epicurus.biz" target="_blank" rel="noopener noreferrer">
        <img src={epicurusLogo} alt="Epicurus" className="footer-logo" />
      </a>
    </footer>
  );
};

export default Footer;
