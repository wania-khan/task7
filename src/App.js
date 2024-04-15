import './App.css';
import React from 'react';
import HeaderMenu from './components/headerMenu.js';
import HeroSection from'./components/heroSection.js';
import HeroMission from './components/heroMission.js';
import SectionedTemplate from './components/sectionedTemplate.js';
import UpperSection from './components/upperSection.js';
import LowerSection from './components/lowerSection.js';
import Footer from './components/footer.js';

function App() {
  return (
    <>
    <br></br>
    <div className='container-header'>
      <br></br>
    <HeaderMenu />
    <HeroSection />
    </div>
    <div className='mission-section'>
     <HeroMission />
    </div>
    <div className='block-section'>
     <SectionedTemplate />
    </div>
    <div className='upper-section'>
     <UpperSection />
    </div>
    <LowerSection />
    <div className='footer-section'>
    <Footer />
    </div>
    </>
  );
}

export default App;