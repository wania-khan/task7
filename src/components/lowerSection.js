import React from "react";
import './lowerSection.css';
import Search from '../assets/imgs/search.png';
import Vector from '../assets/imgs/vector.png';

function lowerSection(){
    return(
    <>
    <div className="lower-section">
    <br></br><br></br>
    <div className="form-items-container">
    <form className="form-items">
    <select className="dept-item" >
     <option value="null">Department</option>
    </select>
    <select className="pos-item" >
     <option value="null">Position</option>
    </select>
    </form>
    <p className="search-bar"><img src={Search} alt="error" className="search-img"/>&nbsp;&nbsp;Search</p>
    </div>
    <hr className='hr'></hr>
    <br></br>
    <div className="cont">
    <div className="se-container">
        <p className="header-se">Full Stack Software Engineer</p>
        <p className="content-se-p1">Engineering &nbsp;&nbsp;&nbsp;<span className="vert-hr">|</span>
        &nbsp;&nbsp;&nbsp;
        Principal L6 &nbsp;&nbsp;&nbsp;<span className="vert-hr">|</span>
        &nbsp;&nbsp;&nbsp;
        Remote
        </p>
        <p className="content-se-p2">Responsible for designing, developing, and deploying software applications across the full stack of web technologies....
        </p>
        <p className="content-se-p3">Learn More &nbsp;&nbsp;&nbsp;<img src={Vector} alt="error"/></p>
    </div>
    <br></br>
    <div className="se-container">
        <p className="header-se">Product Marketing Manager</p>
        <p className="content-se-p1">Marketing&nbsp;&nbsp;&nbsp;<span className="vert-hr">|</span>
        &nbsp;&nbsp;&nbsp;
        Marketing Manager &nbsp;&nbsp;&nbsp;<span className="vert-hr">|</span>
        &nbsp;&nbsp;&nbsp;
        Dallas, TX
        </p>
        <p className="content-se-p2">Responsible for developing marketing plans and strategies for specific products or product lines, including conducting....
        </p>
        <p className="content-se-p3">Learn More &nbsp;&nbsp;&nbsp;<img src={Vector} alt="error"/></p>
    </div>
    </div>
    <br></br><br></br><br></br>
    </div>
    </>    
    );
}

export default lowerSection;