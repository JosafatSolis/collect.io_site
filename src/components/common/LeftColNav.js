import React from "react";
import avatar from "../../assets/Avatar.png";

const LeftColNav = () => {
  return (
    <div id="leftMainCol" className="uk-width-medium">
      <div
        id="leftColCardAndGrid"
        className="uk-grid-divider uk-card uk-card-default uk-card-body uk-padding-remove-right uk-height-1-1"
        uk-grid="true"
      >
        <div id="logo">[Logo Collect.io]</div>
        <div id="userInfo">
          <img src={avatar} alt="avatar" /> Current User
        </div>
        <div id="navMenu">
          Nav Menu
          <ul>
            <li>Home</li>
            <li>View Data</li>
            <li>Admin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftColNav;
