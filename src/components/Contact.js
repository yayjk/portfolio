import React from "react";
import Header from "./Header";
import Brief from "./Brief";

function Contact() {
  return (
    <div className="home">
      <Header />
      <Brief />
      <div className="content">
        <div id="contact-container">
          <h1>Contact Number: 6363580789</h1>
          <h1>Email ID: sjaskaran10@yandex.com</h1>
          <h1>
            To contact me on social media click on the links in the footer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
