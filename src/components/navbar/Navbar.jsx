import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div>
              <div className="nav_menu">
                <ul className="nav_list grid hidden lg:flex lg:items-center">
                  <li className="nav_item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>

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
              </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
