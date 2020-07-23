import React from "react";
import { useSelector } from "react-redux";
import statsGen from "../../utils/statsGen";

const StatsContainer = () => {
  const { data } = useSelector((state) => state.data);
  const stats = statsGen(data);
  return (
    <div>
      {stats.length === 0 && (
        <span >
          <h2 className="uk-text-primary uk-text-center">Define filters and press UPDATE</h2>
        </span>
      )}
      {stats.length > 0 && (
        <div>
          <h2>Statistics</h2>
          {stats.map((dataset) => (
            <div key={dataset.code} style={{backgroundColor: `${dataset.backgroundColor}`}}>
              <h4>{dataset.code}</h4>
              <div
                id="statsCell"
                className="uk-width-1-1 uk-card uk-card-default uk-card-body uk-margin-small"
                style={{borderColor: `${dataset.borderColor}`}}
                >
                <div
                  id="statsCellGrid"
                  className="uk-grid-divider"
                  uk-grid="true"
                >
                  <div id="totalRecordsCell" className="uk-flex">
                    <span>
                      <label>Total Records:</label> <label style={{color: `${dataset.borderColor}`}}>{dataset.totalRecords}</label>
                    </span>
                  </div>
                  <div id="totalRecordsCell" className="uk-flex">
                    <span>
                      <label>Sum:</label> <label style={{color: `${dataset.borderColor}`}}>{dataset.sum}</label>
                    </span>
                  </div>
                  <div id="totalRecordsCell" className="uk-flex">
                    <span>
                      <label>Minimum:</label> <label style={{color: `${dataset.borderColor}`}}>{dataset.min}</label>
                    </span>
                  </div>
                  <div id="totalRecordsCell" className="uk-flex">
                    <span>
                      <label>Maximum:</label> <label style={{color: `${dataset.borderColor}`}}>{dataset.max}</label>
                    </span>
                  </div>
                  <div id="totalRecordsCell" className="uk-flex">
                    <span>
                      <label>Mean:</label> <label style={{color: `${dataset.borderColor}`}}>{dataset.avg.toFixed(2)}</label>
                    </span>
                  </div>
                  <div id="totalRecordsCell" className="uk-flex">
                    <span>
                      <label>Std Dev:</label> <label style={{color: `${dataset.borderColor}`}}>{dataset.std.toFixed(2)}</label>
                    </span>
                  </div>
                  <div id="totalRecordsCell" className="uk-flex">
                    <span>
                      <label>Lower Ctrl Lim:</label> <label style={{color: `${dataset.borderColor}`}}>{dataset.LCL.toFixed(2)}</label>
                    </span>
                  </div>
                  <div id="totalRecordsCell" className="uk-flex">
                    <span>
                      <label>Upper Ctrl Lim:</label> <label style={{color: `${dataset.borderColor}`}}>{dataset.UCL.toFixed(2)}</label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatsContainer;
