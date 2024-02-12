import { Column } from "@ant-design/plots";

export const BarChart = () => {
  const data = [
    {
      type: "家具家电",
      sales: 38,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 61,
    },
    {
      type: "美容洗护",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "进口食品",
      sales: 38,
    },
    {
      type: "食品饮料",
      sales: 38,
    },
  ];

  const config = {
    data,
    width: 200,
    height: 250,
    xField: "type",
    yField: "sales",
    label: false,
    maxColumnWidth: 6,

    xAxis: false,
    yAxis: false,
  };
  return <Column {...config} />;
};
