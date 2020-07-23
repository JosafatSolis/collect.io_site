import React from "react";
import { Link } from "react-router-dom";

import whitelogo from "../../assets/whitelogo.png";

const LeftColNav = () => {
  return (
    <div id="leftMainCol" className="uk-width-medium" style={{minWidth: "220px"}}>
      <div
        id="leftColCardAndGrid"
        className="uk-grid-divider uk-card uk-card-default uk-card-body uk-padding-remove-right uk-height-1-1"
        uk-grid="true"
        style={{backgroundColor: "#f9f9f9"}}
      >
        <img id="logo" src={whitelogo} alt="logo" />
        <div id="navMenu">
          <ul className="uk-list uk-list-large uk-list-divider">
            <li><Link className="uk-link-muted" to="/home">View Data</Link></li>
            <li><Link className="uk-link-muted" to="/home/adminformats">Admin Formats</Link></li>
            <li><Link className="uk-link-muted" to="/home/adminformats">User Profile</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftColNav;
