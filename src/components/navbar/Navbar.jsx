import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="nav container">
        <div className="menu">
          <ul className="nav_list">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/ourstory"
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/registry"
              >
                Registry
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/venue"
              >
                Venue
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar