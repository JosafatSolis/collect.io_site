import React from "react";

const Params = () => {
  return (
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
  );
};

export default Params;
