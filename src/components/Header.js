import React from "react";

function Header() {
  function navSlide() {
    document.querySelector(".nav-links").classList.toggle("nav-active");
  }

  return (
    <div id="header">
      <ul className="nav-links">
        <li>
          <i class="fas fa-home"></i>
          <div>Home</div>
        </li>
        <li>
          <i class="far fa-file"></i>
          <div>Resume</div>
        </li>
        <li>
          <i class="fas fa-mobile"></i>
          <div>Contact</div>
        </li>
      </ul>
      <div id="mobile-menu">
        <i class="fas fa-bars" onClick={navSlide}></i>
        <p>Portfolio</p>
      </div>
    </div>
  );
}

export default Header;
