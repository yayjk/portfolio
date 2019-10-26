import React from "react";
import { Link } from "react-router-dom";

function Header() {
  function navSlide() {
    document.querySelector(".nav-links").classList.toggle("nav-active");
  }

  return (
    <div id="header">
      <ul className="nav-links">
        <Link to="/" className="navstyle">
          <li>
            <i class="fas fa-home"></i>
            <div>Home</div>
          </li>
        </Link>
        <Link to="/resume" className="navstyle">
          <li>
            <i class="far fa-file"></i>
            <div>Resume</div>
          </li>
        </Link>
        <Link to="/contact" className="navstyle">
          <li>
            <i class="fas fa-mobile"></i>
            <div>Contact</div>
          </li>
        </Link>
      </ul>
      <div id="mobile-menu">
        <i class="fas fa-bars" onClick={navSlide}></i>
        <p>Portfolio</p>
      </div>
    </div>
  );
}

export default Header;
