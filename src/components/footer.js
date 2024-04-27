import React from "react";
import './footer.css';
import GrowthIcon from '../assets/imgs/growthicon.png';
import LinkedIn from '../assets/imgs/linkedin.png';
function footer(){
    return(
    <>
    <div className="footer-block">
    <div className="footer-container">
    <div className="growth-footer">
    <img className="growth-icon" src={GrowthIcon} alt="error" />
    </div>
     <div className="company-footer">
        <p className="company-header">Company</p>
        <p className="company-content">Careers</p>
        <p className="company-content">Partners</p>
        <p className="company-content">Events</p>
        <p className="company-content">Press</p>
     </div>
     <div className="platform-footer">
        <p className="platform-header">Platform</p>
        <p className="platform-content">Platform Overview</p>
        <p className="platform-content">Calendar & Scheduling</p>
        <p className="platform-content">Contacts</p>
        <p className="platform-content">Sites</p>
        <p className="platform-content">Growthbooks</p>
        <p className="platform-content">Payments</p>
        <p className="platform-content">Listings</p>
     </div>
     <div className="resources-footer">
        <p className="resources-header">Resources</p>
        <p className="resources-content">Blog</p>
        <p className="resources-content">Book a Demo</p>
        <p className="resources-content">Contact Us</p>
     </div>
    </div>
    <br></br>
     <hr className="hr-content"></hr>
    <br></br><br></br>
    <div className="footer-end">
    <div className="icon-footer">
    <img src={LinkedIn} alt="error" />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;

    </div>
    <div className="imp-footer">
    <p className="footer-content">Terms of use</p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <p className="footer-content">Privacy</p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <p className="footer-content">Legal</p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <p className="footer-content">© Growthware 2023</p>
    </div>
    </div>
    <br></br><br></br>
    </div>
    </>
    );
}

export default footer;