import React from "react";
import Nav from "./index";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container mt-3r">
        <Nav />
        <h3 className="font-weight-bold text-white heading">
          What books are you interested in reading?
        </h3>
        <hr />
      </div>
    </div>
  );
}

export default Jumbotron;
