import React from 'react';
import Link from '../assets/imgs/link.png';
import Image from '../assets/imgs/image-body.png';

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
     <br></br><br></br>
     <button className='btn-apply-now'><img src={Link} alt='error'/></button>
     <br></br><br></br>
     <br></br><br></br><br></br>
    </div>
    <div className='image'>
    <img className='img-body'alt='error' src={Image} />
    </div>
    </div>
    </>
    );
}
export default heroSection;