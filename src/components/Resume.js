import React from "react";
import Header from "./Header";
import Brief from "./Brief";

function Resume() {
  return (
    <div className="home">
      <Header />
      <Brief />
      <div className="content">Resume Content</div>
    </div>
  );
}

export default Resume;
