import React from "react";
import "./captcha.css";
import Pic1 from "../../assets/talkajimmy.png";
import Pic2 from "../../assets/faketalkajimmy.jpg";
import Pic3 from "../../assets/faketalkajimmy2.jpg";
import Pic4 from "../../assets/fakejimmytalka3.jpg";
import Pic5 from "../../assets/fakejimmytalka4.jpg";
import Pic6 from "../../assets/faketalkajimmy5.jpg";
import Pic7 from "../../assets/fakejimmytalka6.jpg";
import Pic8 from "../../assets/fakejimmytalka7.jpg";
import Pic9 from "../../assets/fakejimmytalka8.jpg";


function Captcha() {
  const click = () => {
    console.log('Correct!!!');
  };

  const wrongClick = () => {
    console.log("wrong pic");
  };

  return (
    <div>
      <h3 className="captcha_title">
        Prove you're not a robot: Find the real Talka and Jimmy
      </h3>
      <br />
      <div className="grid">
        <div className="cell">
          <img onClick={() => click()} src={Pic1} alt="talka-jimmy" />
        </div>

        <div className="cell">
          <img onClick={() => wrongClick()} src={Pic2} alt="talka-jimmy" />
        </div>
        <div className="cell">
          <img onClick={() => wrongClick()} src={Pic3} alt="talka-jimmy" />
        </div>
        <div className="cell">
          <img onClick={() => wrongClick()} src={Pic4} alt="talka-jimmy" />
        </div>
        <div className="cell">
          <img onClick={() => wrongClick()} src={Pic5} alt="talka-jimmy" />
        </div>
        <div className="cell">
          <img onClick={() => wrongClick()} src={Pic6} alt="talka-jimmy" />
        </div>
        <div className="cell">
          <img onClick={() => wrongClick()} src={Pic7} alt="talka-jimmy" />
        </div>
        <div className="cell">
          <img onClick={() => wrongClick()} src={Pic8} alt="talka-jimmy" />
        </div>
        <div className="cell">
          <img
            id="correctImg"
            onClick={() => click()}
            src={Pic9}
            alt="talka-jimmy"
          />
        </div>
      </div>
    </div>
  );
}

export default Captcha;
