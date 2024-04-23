import React from 'react';
import './sectionedTemplate.css';
import Check from '../assets/imgs/check.png';
import User from '../assets/imgs/user.png';

function sectionedTemplate(){
    return(
    <>
    <div className='block-container'>
    <div className='block-1'>
     <p className='block-p1'>Traits of A players</p>
     <p className='block-p2'><img src={Check} alt='error' className='check'/>&nbsp;&nbsp;
     <span>You have an unmatched work ethic.</span>
     </p>
     <p className='block-p2'><img src={Check} alt='error' className='check'/>&nbsp;&nbsp;
     <span>You have an outstanding approach to creative problem solving.</span>
     </p>
     <p className='block-p2'><img src={Check} alt='error' className='check'/>&nbsp;&nbsp;
     <span>You&apos;re an exceptional team player.</span>    
     </p>
     <p className='block-p2'><img src={Check} alt='error' className='check'/>&nbsp;&nbsp;
    <span>You have a burning desire to help change the world.</span>
     </p>
    </div>
    <div className='block-2'>
    <p><img className='img-p1' src={User} alt='error'/></p>
    <div className='content-block'>
    <p className='content-p1'>Who should work at Growthware?</p>
    <p className='content-p2'>Be yourself, be an individual, be the best version of yourself.<br></br> 
    Growthware is a team sport, but great ideas and true innovation can come from anywhere and anyone. 
    No matter your background or role, unlock your mind - our customers are counting on you.</p>
    </div>
    </div>
    </div>
    </>
    );
}

export default sectionedTemplate;