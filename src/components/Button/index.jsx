/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { Button } from "antd";

const StyledButton = styled(Button)`
  padding: 15px 60px;
  border-radius: 8px;
  color: white;
  height: auto;

  ${(props) => {
    switch (props.type) {
      case "primary":
        return css`
          background: var(--Primary-Pink, #e85b81);
        `;
      case "alternative":
        return css`
          background: var(--Primary-Purple, #5e48e8);
        `;
      case "secondary":
        return css`
          border: 1px solid var(--Mono-Gray-3, #b5b5b5);
          color: #b5b5b5;
        `;
      default:
        return null;
    }
  }}
`;

const CustomButton = ({ type }) => (
  <StyledButton type="primary" {...{ type }}>
    {type} Button
  </StyledButton>
);

export default CustomButton;
