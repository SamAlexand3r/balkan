import React from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import backgroundVideo from './assets/background.webm'; 

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/webm" />
      </video>
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
  );
}


export default App;
