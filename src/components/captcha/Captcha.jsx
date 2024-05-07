import React from "react";
import './captcha.css';
import Pic1 from '../../assets/talkajimmy.png';   

function Captcha() {
  return (
    <div className="grid">
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
      <div className="cell">
        <img src={Pic1} alt="talka-jimmy" />
      </div>
    </div>
  );
}

export default Captcha;
