/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Tabs } from "antd";
import Tab from "../Tab";

const { TabPane } = Tabs;

const StyledTabBar = styled(Tabs)`
  display: inline-flex;
  align-items: center;
  gap: 60px;

  .ant-tabs-nav {
    color: black;
    margin-bottom: 6px;
  }

  .ant-tabs-ink-bar {
    background-color: var(--Primary-Pink, #e85b81);
  }
`;

const TabBar = ({ items, defaultActiveKey }) => (
  <StyledTabBar defaultActiveKey={defaultActiveKey}>
    {items.map((item) => (
      <TabPane tab={<Tab label={item.label} />} key={item.key}></TabPane>
    ))}
  </StyledTabBar>
);

export default TabBar;
