import React, { useRef } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h3>T&J</h3>
        <nav ref={navRef}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/home"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/faq"
          >
            FAQ
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/ourstory"
          >
            Our Story
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/registry"
          >
            Registry
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/venue"
          >
            Venue
          </NavLink>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
