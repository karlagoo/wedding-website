import React from "react";
import "./welcome.css";
import Pic from "../assets/Subject.png";

function Welcome() {
  return (
    <div className="container">
      <div className="welcome_container">
        <div className="paragraph_container">
          <h1>Welcome to Natalia's and Jimmy's Wedding website</h1>

          <button>click me</button>
        </div>

        <img src={Pic} alt="" className="welcome_img" />
      </div>
    </div>
  );
}

export default Welcome;
