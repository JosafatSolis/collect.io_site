import React from "react";
import avatar from "./assets/Avatar.png";
import "./App.css";

function App() {
  return (
    <div style={{display: "flex", backgroundColor: "red" }}>
      <div className="uk-width-medium">
        <div
          className="uk-grid-divider uk-card uk-card-default uk-card-body uk-padding-remove-right uk-height-1-1"
          uk-grid="true"
        >
          <div>[Logo Collect.io]</div>
          <div>Current User / Avatar</div>
          <div>
            Nav Menu
            <ul>
              <li>Home</li>
              <li>View Data</li>
              <li>Admin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="uk-height-1-1 uk-width-1-1">
        <div className="uk-height-1-1 uk-card uk-card-default uk-card-body uk-padding-remove-left uk-padding-remove-right uk-padding-remove-bottom">
          <div className="uk-grid-divider" uk-grid="true">
            <div className="uk-width-1-1">Breadcrumb</div>
            <div className="uk-width-1-1 uk-height-1-1">
              <div className="uk-grid-divider" uk-grid="true">
                <div className="uk-width-1-1">
                  <div className="uk-grid-divider" uk-grid="true">
                    <div>
                      <label>Fecha de Inicio:</label>
                      <input type="date"></input>
                    </div>
                    <div>
                      <label>Fecha de Inicio:</label>
                      <input type="date"></input>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-1 uk-height-1-1">
                  <img src={avatar} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </div>
              </div>
            </div>
            <div className="uk-width-1-1">
              Copyright este es un texto adicional (c){" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
