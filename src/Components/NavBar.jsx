import React, { useState } from "react";
import ImageLogo from "../assets/Right-Click-Logo.png";
import "./NavBar.css";

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navigation-bar">

      <nav className="navbar">

        <div className="logo-container">
          <img
            className="logo"
            src={ImageLogo}
            alt="Right Click Photography"
          />
        </div>

        {/* Hamburger Icon */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>

      </nav>

    </div>
  );
}

export default NavBar;