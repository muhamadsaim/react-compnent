/* eslint-disable react/prop-types */
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const TypoGraphy = ({ level, content, type }) => {
  if (type === "paragraph") {
    return <Paragraph>{content}</Paragraph>;
  }

  if (type === "small") {
    return <Text type="secondary">{content}</Text>;
  }

  return <Title level={level}>{content}</Title>;
};

export default TypoGraphy;
