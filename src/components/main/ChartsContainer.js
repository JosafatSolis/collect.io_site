import React from "react";
import { Line, defaults, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { checkIfEmptyOject } from "../../utils/utils";
import lineChartDataGen from "../../utils/lineChartDataGen";
import pieChartDataGen from "../../utils/pieChartDataGen";
//import barChartDataGen from "../../utils/barChartDataGen";

defaults.global.pointStyle = "cross";

const ChartsContainer = () => {
  const { data } = useSelector((state) => state.data);

  const lineChartData = lineChartDataGen(data);
  const pieChartData = pieChartDataGen(data);
  //const barChartData = barChartDataGen(data);

  return (
    <div>
      {!checkIfEmptyOject(data) && (
        <div className="uk-child-width-expand@s uk-text-center uk-grid-small uk-grid-row-large" uk-grid="true">
          <div style={{width: "400px"}}>
            <Line data={lineChartData} />
          </div>
          <div style={{width: "400px"}}>
            <Pie data={pieChartData} />
          </div>

          {/* <Bar data={barChartData} /> */}
        </div>
      )}
    </div>
  );
};

export default ChartsContainer;
