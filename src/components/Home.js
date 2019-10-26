/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "./Header";
import Brief from "./Brief";
import img from "../assets/pro_pic/profile.jpg";

function Home() {
  return (
    <div className="home">
      <Header />
      <Brief />
      <div className="content">
        <div className="content-container">
          <p>
            I'm a 2019 CSE graduate. I was born and brought up in Bengaluru. I
            am very passionate about computer science and love web development.
            My aim is to have a career in Data Science
          </p>
          <div>
            <img src={img} alt="profile image"></img>
          </div>
          <p>
            I am a huge fan of stand up comedy and mixed martial arts. I also
            like to watch movies in my free time
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
