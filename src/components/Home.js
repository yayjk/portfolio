import React from "react";
import Header from "./Header";
import Brief from "./Brief";

function Home() {
  return (
    <div className="home">
      <Header />
      <Brief />
      <div className="content">Content</div>
    </div>
  );
}

export default Home;
