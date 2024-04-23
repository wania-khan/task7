import React from 'react';
import navlogo from '../assets/imgs/navlogo.png';
import Chevron from '../assets/imgs/chevron.png';
function headerMenu(){
    return(
    <>
    <div className='header-menu'>
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    <div className='navbar-logo'>
      <img src={navlogo} alt='erro' className='navlogo'></img>
    </div>
    <div className='navbar-menu'>
        <span className='menu-bar'>Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Company <img src={Chevron} alt='error' className='chevron-icon'/>
        &nbsp;&nbsp;&nbsp;
        Platform <img src={Chevron} alt='error' className='chevron-icon'/></span>&nbsp;&nbsp;&nbsp;
        Resources <img src={Chevron} alt='error' className='chevron-icon'/>
    </div>
    <div className='navbar-signup'>
      <span className='navbar-login'>Login</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='button-createAcc'>Create Account</button>
    </div>
    </div>
    </>
    );
}
export default headerMenu;