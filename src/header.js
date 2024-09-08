import React from 'react';
import './header.css';
import balkanLogo from './assets/balkan-logo.png';  

const Header = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <img src={balkanLogo} alt="Balkan-i.com" className="balkan-logo" />
        </div>
      </header>
    );
  };
  
  export default Header;