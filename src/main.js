import React from 'react';
import './main.css';
import monteLogo from './assets/logo.png';  
import serbLogo from './assets/Serb.png';
import croatLogo from './assets/hrvat.png';
import bosniaLogo from './assets/Bosna.png';
import slovenLogo from './assets/sloven.png';
import macedLogo from './assets/Mkd.png';

const Main = () => {
  return (
    <div className="main">
      <div className="logo-grid">
        <a href="http://95.165.24.199/" target="_blank" rel="noopener noreferrer" className="country-box no-hover">
          <img src={monteLogo} alt="Monte-i" className="country-logo" />
        </a>
        <div className="country-box">
          <img src={serbLogo} alt="Serb-i" className="country-logo" />
        </div>
        <div className="country-box">
          <img src={croatLogo} alt="Hrvat-i" className="country-logo" />
        </div>
        <div className="country-box">
          <img src={bosniaLogo} alt="Bosna-i" className="country-logo" />
        </div>
        <div className="country-box">
          <img src={slovenLogo} alt="Sloven-i" className="country-logo" />
        </div>
        <div className="country-box">
          <img src={macedLogo} alt="Mkd-i" className="country-logo" />
        </div>
      </div>
    </div>
  );
};

export default Main;