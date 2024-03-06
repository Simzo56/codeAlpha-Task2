import React, { useState } from "react";
import CurrentLocation from "./CurrentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          
        </a>{" "}
         Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Simran Saini
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          Reactjs
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;