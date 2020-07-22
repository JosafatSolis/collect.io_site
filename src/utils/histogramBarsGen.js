import Enumerable from "linq";
import { defaults } from "react-chartjs-2";

const histogramBarsGen = (data) => {
  let xLabels = [];
  let yValues = [];

  if (data && Array.isArray(data) && data.length) {
    data.sort((a, b) => a - b);
    console.log(data);

    const totVals = data.length;
    const min = Math.min(...data);
    const max = Math.max(...data);
    let divNum = Math.floor(Math.sqrt(totVals));
    divNum = divNum < 3 ? 3 : divNum;
    divNum = divNum > 20 ? 20 : divNum;
    const step = (max - min) / divNum;

    let xValues = [];
    for (let i = 0; i < divNum; i++) {
      xValues.push(min + i * step);
    }

    let tmpLstY = [];

    
  }
};

export default histogramBarsGen;
