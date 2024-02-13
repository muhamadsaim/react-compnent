import { Column } from "@ant-design/plots";

// eslint-disable-next-line react/prop-types
export const BarChart = ({ data, color }) => {
  const config = {
    data,
    padding: 0,
    margin: 0,
    width: 125,
    height: 100,
    xField: "type",
    yField: "sales",
    label: false,
    axis: false,
    colorField: color,
    sizeField: 6,
    style: {
      radiusTopLeft: 10,
      radiusTopRight: 10,
      color: color,
    },
  };
  return <Column {...config} />;
};
