import React from 'react';
import navlogo from '../assets/imgs/navlogo.png';

function headerMenu(){
    return(
    <>
    <div className='header-menu'>
    <div className='navbar-logo'>
      <img src={navlogo} alt='erro' className='navlogo'></img>
      
    </div>
    <div className='navbar-menu'>
        <span className='menu-bar'>Home&nbsp;&nbsp;&nbsp;&nbsp;Company <span className='gt'>&gt;</span>&nbsp;&nbsp;&nbsp;
        Platform <span className='gt'>&gt;</span>&nbsp;&nbsp;&nbsp;
        Resources <span className='gt'>&gt;</span></span>
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