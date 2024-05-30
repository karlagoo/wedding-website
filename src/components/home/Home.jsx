import React from "react";
import "./home.css";
import Homepic from '../../assets/homePic.png';
import Navbar from "../navbar/Navbar";

function Home() {

  return (
    <div>
        <Navbar/>
      <div>
        <img className='home_image' src={Homepic} alt="" />
      </div>
    </div>
  );
}

export default Home;
