import React from "react";
import "./welcome.css";
import Pic from "../assets/Subject.png";
import { useNavigate } from "react-router-dom";


function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    //console.log("hi")
    navigate("/password");
  };
  return (
    <div className="container">
      <div className="welcome_container">
        <div className="paragraph_container">
          <h1>Welcome to Natalia's and Jimmy's Wedding website</h1>

          <button onClick={handleClick}>Let's Party→</button>
        </div>

        <img src={Pic} alt="" className="welcome_img" />
      </div>
    </div>
  );
}

export default Welcome;
