import React, { useState } from "react";
import "../navbar/navbar.css";
import LOGO from "../../img/yzy.png";
import { Link } from "react-router-dom";

function Navbar() {
  setInterval(setTime, 1000);
  var now = new Date().toLocaleTimeString();
  const [currentTime, updateTime] = useState(now);

  function setTime() {
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link className="Logo-home" to="/">
          <img id="logo" src={LOGO} alt="logo" />
        </Link>
        <div id="timeDisplay">
          <h4>{currentTime}</h4>
        </div>
      </div>
      <div className="Cart">
        <Link to="/Cart">
          <i class="large material-icons">shopping_cart</i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
