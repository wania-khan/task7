import React from 'react';
import './Perks.css';
import Laptop from '../assets/imgs/laptop.png';
import Globe from '../assets/imgs/globe.png';
import MedicalCircle from '../assets/imgs/medicalcircle.png';
import Coins from '../assets/imgs/coins.png';
import Dumbbell from '../assets/imgs/dumbbell.png';
import Luggage from '../assets/imgs/luggage.png';
import Tshirt from '../assets/imgs/tshirt.png';
import PiggyBank from '../assets/imgs/piggybank.png';

const perksData = [
    { title: "16\" Macbook Pro", img: Laptop },
    { title: "Remote HQ", img: Globe },
    { title: "Health Insurance", img: MedicalCircle},
    { title: "401k Match", img:  Coins},
    { title: "Classpass Membership", img: Dumbbell},
    { title: "Flexible PTO", img: Luggage },
    { title: "Growthware swag", img:  Tshirt},
    { title: "Stock Options", img: PiggyBank},
  ];
  
  function Perks() {
    return (
      <ul className="perks-list">
      <div className="perks-container">
        {perksData.map((perk) => (
          <li key={perk.title} className="perk-item">
            <div className='item'>
              <img src={perk.img} alt={perk.title} className="perk-img" />
              <br></br><br></br>
              <span className="perk-text">{perk.title}</span>
            </div>
          </li>
        ))}
      </div>
    </ul>
    );
}

export default Perks;