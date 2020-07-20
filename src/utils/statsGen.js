// http://neue.cc/reference.htm
import Enumerable from "linq";
import { getRGBA, getA2 } from "../utils/utils";

const genDataSet = (data) => {
  const totalRecords = data.length;

  const sum = data.reduce((acc, current) => (acc += current), 0);
  const min = Math.min(...data);
  const max = Math.max(...data);
  const avg = sum / totalRecords;

  const tmp = data.reduce(
    (acc, current) => (acc += Math.pow(current - avg, 2)),
    0
  );
  const std = totalRecords > 1 ? Math.sqrt(tmp) : 0;
  
  const subGroup = 4;
  let means = [];
  let ranges = [];
  let tmp2 = [...data];
  while (tmp2.length >= subGroup) {
    const values = tmp2.splice(0, subGroup);
    means.push(values.reduce((acc, current) => (acc += current), 0) / subGroup);
    ranges.push(Math.max(...values) - Math.min(...values));
  }
  const greatMean =
    means.length > 0
      ? means.reduce((acc, current) => (acc += current), 0) / means.length
      : 0;
  const avgRange =
    ranges.length > 0
      ? ranges.reduce((acc, current) => (acc += current)) / ranges.length
      : 0;
  const LCL = greatMean - getA2(subGroup) * avgRange;
  const UCL = greatMean + getA2(subGroup) * avgRange;

  return {
    totalRecords,
    sum,
    min,
    max,
    avg,
    std,
    LCL,
    UCL,
  };
};

const statsGen = (dataArray) => {
  const stats = [];

  if (dataArray && Array.isArray(dataArray) && dataArray.length) {
    stats.push({
      code: "All Codes",
      ...genDataSet(dataArray.map((record) => record.value)),
      backgroundColor: [getRGBA("ALL", 0.2)],
      borderColor: [getRGBA("ALL")],
    });

    const codes = dataArray.map((record) => record.code);
    Enumerable.from(codes)
      .distinct()
      .forEach((code) => {
        const data = Enumerable.from(dataArray)
          .where((record) => record.code === code)
          .select((record) => {
            return record.value;
          })
          .toArray();

        stats.push({
          code: "Code: " + code,
          ...genDataSet(data),
          backgroundColor: [getRGBA(code, 0.2)],
          borderColor: [getRGBA(code)],
        });
      });
  }
  return stats;
};

export default statsGen;
