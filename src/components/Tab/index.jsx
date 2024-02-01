/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledTab = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px; /* Decreased the gap to 6px */
  color: black;
  font-family: Arial, Helvetica, sans-serif;

  .ant-tabs-tab-btn {
    padding: 0 12px;
  }

  .ant-tabs-ink-bar {
    background-color: black;
  }
`;

const Tab = ({ label, children }) => (
  <StyledTab key={label}>
    <h3>{label}</h3>
    <p>{children}</p>
  </StyledTab>
);

export default Tab;
