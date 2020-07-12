import React from "react";
import { Line } from "react-chartjs-2";
import avatar from "./assets/Avatar.png";
import "./App.css";

const createChartData = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return data;
};

function App() {
  return (
    <div id="main" style={{ display: "flex", backgroundColor: "red" }}>
      <div id="leftMainCol" className="uk-width-medium">
        <div
          id="leftColCardAndGrid"
          className="uk-grid-divider uk-card uk-card-default uk-card-body uk-padding-remove-right uk-height-1-1"
          uk-grid="true"
        >
          <div id="logo">[Logo Collect.io]</div>
          <div id="userInfo">Current User / Avatar</div>
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
      <div id="rightMainCol" className="uk-height-1-1 uk-width-1-1">
        <div
          id="rightColCard"
          className="uk-height-1-1 uk-card uk-card-default uk-card-body uk-padding-remove-left uk-padding-remove-right uk-padding-remove-bottom"
        >
          <div id="rightColCardGrid" className="uk-grid-divider" uk-grid="true">
            <div id="breadcrumbCell" className="uk-width-1-1">
              Breadcrumb
            </div>
            <div id="paramsAndContentCell" className="uk-width-1-1 uk-height-1-1">
              <div
                id="paramsAndContentCellGrid"
                className="uk-grid-divider"
                uk-grid="true"
              >
                <div id="paramsCell" className="uk-width-1-1">
                  <div id="paramsCellGrid" className="uk-grid-divider" uk-grid="true">
                    <div id="paramOneCell">
                      <label>Fecha de Inicio:</label>
                      <input type="date"></input>
                    </div>
                    <div id="paramTwoCell">
                      <label>Fecha de Inicio:</label>
                      <input type="date"></input>
                    </div>
                  </div>
                </div>
                <div id="contentCell" className="uk-width-1-1 uk-height-1-1">
                  <Line data={createChartData} />
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
            <div id="footerCell" className="uk-width-1-1">
              Copyright este es un texto adicional (c){" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
