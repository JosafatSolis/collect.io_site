import Enumerable from "linq";
import { getRGBA } from "./utils";

const barChartDataGen = (dataArray) => {
  let chartData = {};

  if (dataArray && Array.isArray(dataArray) && dataArray.length) {
    const codes = dataArray.map((record) => record.code);
    const data = [];
    let backgroundColor = [];
    const labels = [];
    Enumerable.from(codes)
      .distinct()
      .forEach((code) => {
        const values = Enumerable.from(dataArray)
          .where((record) => record.code === code)
          .select((record) => {
            return record.value;
          })
          .toArray();

        data.push(values.length);
        backgroundColor.push(getRGBA(code, 0.6));
        labels.push(code);
      });
    
    // console.log(labels);
    chartData = {
      datasets: [{data, backgroundColor}],
      labels
    };
  }

  const chartData2 = {
    datasets: [{
      barPercentage: 0.8,
      minBarLength: 2,
      data: [10,20,30,40,50,40,30,20,10]
    }],
    labels: ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve"]
  };

  return chartData2;
};

export default barChartDataGen;
