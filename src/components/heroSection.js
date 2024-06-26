import React from 'react';
import './heroSection.css';
import Link from '../assets/imgs/link.png';
import Image from '../assets/imgs/art.png';

function heroSection(){
    return(
    <>
    <div className='hero-section'>
    <div className='content'>
     <p className='content-header'>Become a part of the growth revolution</p>
     <p className='content-p'>
     A workplace of innovative thinkers who share a passion for unlocking the secrets of business growth.
     We want to unlock the true you.
     </p>
     <br></br>
     <button className='btn-apply-now'>Apply Now &nbsp; <img src={Link} alt='error' className='link-icon'/></button>
     <span className='content-break'>
     <br></br><br></br>
     <br></br><br></br><br></br>
     </span>
    </div>
    <div className='image'>
    <img className='img-body'alt='error' src={Image} />
    </div>
    </div>
    </>
    );
}
export default heroSection;