// http://neue.cc/reference.htm
import Enumerable from "linq";
import { getArrayOfLetters, getRGBA } from "./utils";

const lineChartDataGen = (dataArray) => {
  let chartData = {};

  if (dataArray && Array.isArray(dataArray) && dataArray.length) {
    const codes = dataArray.map((record) => record.code);
    const datasets = [];
    Enumerable.from(codes)
      .distinct()
      .forEach((code) => {
        const data = Enumerable.from(dataArray)
          .where((record) => record.code === code)
          .select((record) => {
            return record.value;
          })
          .toArray();

        const count = data.length;

        datasets.push({
          label: code,
          count,
          data,
          backgroundColor: [getRGBA(code, 0.2)],
          borderColor: [getRGBA(code)],
          borderWidth: 1,
        });
      });
    const maxLabels = Enumerable.from(datasets)
      .select((value) => {
        return value.count;
      })
      .max();
    // console.log(datasets);
    // console.log(maxLabels);
    const labels = getArrayOfLetters(maxLabels);
    // console.log(labels);
    chartData = {
      labels,
      datasets,
    };
    //console.log(chartData);
  }
  return chartData;
};

export default lineChartDataGen;
