import React from "react";
import "../../src/components/style.css";
import staveBrains from "../../src/assets/images/Brainslogo.png";

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src={staveBrains} alt="" />
        </a>

        <nav className="navbar container" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            {/* <li>
              <a href="#service" className="navbar-link" data-nav-link>Services</a>
            </li> */}

            {/* <li>
              <a href="#project" className="navbar-link" data-nav-link>
                Project
              </a>
            </li> */}

            <li>
              <a href="#about" className="navbar-link" data-nav-link>
                About Us
              </a>
            </li>

            <li>
              <a href="#team" className="navbar-link" data-nav-link>
                Team
              </a>
            </li>

            <li>
              <a href="#contact" className="navbar-link" data-nav-link>
                Contact Us
              </a>
            </li>

            {/* <li>
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
            </li> */}
          </ul>
        </nav>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          data-nav-toggler
        >
          {/* <ion-icon name="menu-outline" className="open"></ion-icon>
        <ion-icon name="close-outline" className="close"></ion-icon> */}
        </button>
      </div>
    </header>
  );
};

export default Header;
