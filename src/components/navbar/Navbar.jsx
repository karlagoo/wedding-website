import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false)
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li>

              <li className="nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/ourstory"
                >
                  Our Story
                </NavLink>
              </li>

              <li className="nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/registry"
                >
                  Registry
                </NavLink>
              </li>

              <li className="nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/venue"
                >
                  Venue
                </NavLink>
              </li>
            </ul>
            
            <i className="uil uil-times nav_close" onClick={(e) => showMenu(!Toggle)}></i>
          </div>

          <div className="nav_toggle" onClick={(e) => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar