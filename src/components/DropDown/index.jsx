import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useState } from "react";

const StyledDropDown = styled(Dropdown)`
  width: 400px;
  height: 70px;
  flex-shrink: 0;
  border: 1px solid #d9d9d9;
  padding: 8px;
  border-radius: 4px;
`;

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    // Handle the click event for each menu item
    console.log(`Option ${e.key} clicked`);
    setSelectedOption(e.key);
    setVisible(false);
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <StyledDropDown
      overlay={menu}
      trigger={["click"]}
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {selectedOption ? `Option ${selectedOption}` : "DropDown"}{" "}
        <DownOutlined />
      </a>
    </StyledDropDown>
  );
};

export default DropDown;
