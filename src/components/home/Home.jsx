import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import Homepic from '../../assets/homePic.png'

function Home() {

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className="menu">
            <ul className="nav_list">
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/ourstory">Our Story</NavLink>
              </li>
              <li>
                <NavLink to="/registry">Registry</NavLink>
              </li>
              <li>
                <NavLink to="/venue">Venue</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div>
        <img className='home_image' src={Homepic} alt="" />
      </div>
    </div>
  );
}

export default Home;
