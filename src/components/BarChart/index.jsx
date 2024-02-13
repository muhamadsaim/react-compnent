import { Column } from "@ant-design/plots";

// eslint-disable-next-line react/prop-types
export const BarChart = ({ data, color }) => {
  const config = {
    data,
    margin: 0,
    padding: 0,
    width: 125,
    height: 100,
    xField: "type",
    yField: "sales",
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
