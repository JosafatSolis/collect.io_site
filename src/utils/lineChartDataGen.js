// http://neue.cc/reference.htm
import Enumerable from "linq";
import { getArrayOfLetters } from "./utils";

const getRGBA = (textSeed, alpha = 1) => {
    const seed = getUniqueNumber(textSeed);
    const r = (255 + 60 * seed) % 255;
    const g = (99 + 140 * seed) % 255;
    const b = (132 + 220 * seed) % 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const getUniqueNumber = (text) => {
    var num = 0, i, chr, len;
    if (text.length === 0) return num;
    for (i = 0, len = text.length; i < len; i++) {
      chr   = text.charCodeAt(i);
      num  = ((num << 5) - num) + chr;
      num |= 0; // Convert to 32bit integer
    }
    return num;
  };

const lineChartDataGen = (dataArray) => {
  let chartData = {};

  if (dataArray && Array.isArray(dataArray) && dataArray.length) {
    const codes = dataArray.map((record) => record.code);
    //Enumerable.from(codes).distinct().select((value, index) => { return index + ':' + value }).log().toJoinedString();
    const datasets = [];
    Enumerable.from(codes)
      .distinct()
      .forEach((code) => {
        const count = Enumerable.from(codes).count(
          (current) => current === code
        );
        const data = Enumerable.from(dataArray).where(record => record.code === code)
          .select((record) => {
            return record.value;
          })
          .toArray();

        datasets.push({
          label: code,
          count,
          data,
          backgroundColor: [getRGBA(code,0.2)],
          borderColor: [getRGBA(code)],
          borderWidth: 1,
        });
      });
    const maxLabels = Enumerable.from(datasets)
      .select((value) => {
        return value.count;
      })
      .max();
    console.log(datasets);
    console.log(maxLabels);
    const labels = getArrayOfLetters(maxLabels);
    console.log(labels);

    // Arma un dataset por código, lleva: Código, los datos del código, background (4 dígitos), borderColor (4 dígitos)

    chartData = {
      labels,
      datasets,
    };

    console.log(chartData);
  }

  const data2 = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 5, 18],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "second",
        data: [11, 15, 5, 2, 6, 9],
        backgroundColor: ["rgba(055, 199, 32, 0.2)"],
        borderColor: ["rgba(055, 199, 32, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return chartData;
};

export default lineChartDataGen;
