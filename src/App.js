import './App.css';
import React from 'react';
import HeaderMenu from './components/headerMenu.js';
import HeroSection from'./components/heroSection.js';
import HeroMission from './components/heroMission.js';

function App() {
  return (
    <>
    <div className='App'>
    <div className='container-header'>
      <br></br>
    <HeaderMenu />
    <HeroSection />
    </div>
    <div className='mission-section'>
     <HeroMission />
    </div>
    </div>
    </>
  );
}

export default App;