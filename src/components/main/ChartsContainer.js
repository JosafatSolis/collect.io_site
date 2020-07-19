import React from "react";
import { Line, defaults } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { checkIfEmptyOject } from "../../utils/utils";
import lineChartDataGen from "../../utils/lineChartDataGen";


defaults.global.pointStyle = "cross";

const ChartsContainer = () => {

const { data, currentFormat } = useSelector((state) => state.data);

  const lineChartData = lineChartDataGen(data);

  return (
    <div>
      <Line data={lineChartData} />
    </div>
  );
};

export default ChartsContainer;
