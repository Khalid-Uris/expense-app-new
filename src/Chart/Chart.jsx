import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointVales = props.dataPaints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointVales);
  return (
    <div className="chart">
      {props.dataPaints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
