import React from "react";
import { Line, defaults, Pie, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { checkIfEmptyOject } from "../../utils/utils";
import lineChartDataGen from "../../utils/lineChartDataGen";
import pieChartDataGen from "../../utils/pieChartDataGen";
import barChartDataGen from "../../utils/barChartDataGen";

defaults.global.pointStyle = "cross";

const ChartsContainer = () => {
  const { data } = useSelector((state) => state.data);

  const lineChartData = lineChartDataGen(data);
  const pieChartData = pieChartDataGen(data);
  const barChartData = barChartDataGen(data);
  console.log(barChartData);

  return (
    <div>
      {!checkIfEmptyOject(data) && (
        <div>
          <Line data={lineChartData} />
          <Pie data={pieChartData}/>
          <Bar data={barChartData} />
        </div>
      )}
    </div>
  );
};

export default ChartsContainer;
