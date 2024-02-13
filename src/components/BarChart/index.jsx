import { Column } from "@ant-design/plots";
import { useContext } from "react";

import { BarChartDataContext } from "../../pages/Dashboard";

// eslint-disable-next-line react/prop-types
export const BarChart = ({ color }) => {
  const data = useContext(BarChartDataContext);
  const config = {
    data,
    margin: 0,
    padding: 0,
    width: 125,
    height: 100,
    xField: "letter",
    yField: "frequency",
    label: false,
    colorField: color,
    sizeField: 6,
    axis: false,
    style: {
      radiusTopLeft: 10,
      radiusTopRight: 10,
      color: color,
    },
  };
  return <Column {...config} />;
};
