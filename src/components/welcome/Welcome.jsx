import React from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container2">
      <div className="welcome_container">
        <h1>Natalia</h1>
        <h1>&</h1>
        <h1>Jimmy</h1><br /><br />
        <h2>Are Getting Hitched</h2><br />
        <h3>August 2nd, 2025</h3>
        <h3>Chicago, Illinois</h3>
        
          <button onClick={() => navigate("/password")}>Let's Party→</button>
        
      </div>
    </div>
  );
}

export default Welcome;
