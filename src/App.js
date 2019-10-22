import React from "react";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Brief from "./components/Brief";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Brief />
        <Content />
      </div>
    </div>
  );
}

export default App;
