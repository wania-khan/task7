import React from "react";
import Perk from '../components/Perks.js';

function upperSection(){
    return(
    <>
    <div className="upper-box">
    <br></br><br></br><br></br>
      <p className="upper-p1">Perks</p>
      <p className="upper-p2">Working with us</p>
      <div className="items-box">
       <Perk />
      </div>
      <br></br><br></br><br></br>
    </div>
    </>
    );
}

export default upperSection;