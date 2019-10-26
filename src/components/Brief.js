import React from "react";

function Brief() {
  return (
    <div id="brief">
      <div id="brief-container">
        <b id="name">JASKARAN SINGH.</b>
        <ul id="intro">
          <li>Web Developer</li>
          <li>2019 Computer Science graduate</li>
          <li>MMA Fan</li>
        </ul>
        <div id="socials">
          <a
            href="https://twitter.com/uhh_its_jk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter-square"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100029045975606"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://github.com/yayjk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jaskaran-singh-436127185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brief;
