import React from "react";
import "./home.css";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
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
  );
}

export default Home;
