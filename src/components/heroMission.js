import React from 'react';
import './heroMission.css';

function heroMission(){
    return(
    <>
    <div className='mission-whole'>
    <div className='upper-container'>
     <br></br><br></br>
     <div className='mission-h'>
     <p className='mission-head'>Our Mission</p>
     <p className='mission-head-content'>“To revolutionize business and economic growth and broadcast it to the world.”</p>
     </div>
     <div className='coloumn-container'>
        <div className='block'>
       <p className='block-content'>
       We strive to be much more than just a software, technology, or data company.
       Yes - each of those are incredibly powerful tools for changing the lives of our local-service 
       small business customers and partners, but they alone aren&apos;t enough to truly innovate on a centuries old industry. 
       To revolutionize on how we help businesses grow and scale, we have to do much more than simply provide technology and know-how. 
       We have to enable our customers with anything and everything they may need to take their
       businesses to the next level, whether it be technology-based or otherwise.  
       </p>
       <span className='content-break'>
          <br></br><br></br>
          </span>
        </div>
        <div className='block'>
          <p className='block-content'>
          From community building, to industry panels, to global events, we take offline learning and bring them online. 
          <span className='content-break'>
          <br></br><br></br>
          </span>
         Above all, we are committed to putting business growth above all else and are honored to
         support the hardworking business owners and partners who are driving our economy forward.
          </p>
        </div>
      </div>
      <br></br><br></br><br></br>
    </div>
    </div>
    </>
    );
}

export default heroMission;