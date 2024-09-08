import React from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import backgroundVideo from './assets/background.webm'; 
import backgroundVideoMP4 from './assets/background.mp4'; 


function App() {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={backgroundVideoMP4} type="video/mp4" /> 
        <source src={backgroundVideo} type="video/webm" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;