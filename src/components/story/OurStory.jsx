import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./ourstory.css";

function OurStory() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default OurStory;
