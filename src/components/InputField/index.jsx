/* eslint-disable react/prop-types */
import { Input, Form } from "antd";

import styled from "styled-components";

const { Item } = Form;

const StyledInputField = styled.div`
  width: 350px;
  height: 56px;
  flex-shrink: 0;
  color: black;
`;

const InputField = ({ label, focusLabel, successLabel, errorLabel, state }) => {
  const getPlaceholder = () => {
    {
      switch (state) {
        case "success":
          return successLabel || label;
        case "error":
          return errorLabel || label;
        case "focus":
          return focusLabel || label;
        default:
          return "Placeholder";
      }
    }
  };

  return (
    <StyledInputField>
      <Item
        label={label}
        colon={true}
        hasFeedback
        validateStatus={
          state === "success" ? "success" : state === "error" ? "error" : ""
        }
      >
        <Input placeholder={getPlaceholder()} />
      </Item>
    </StyledInputField>
  );
};

export default InputField;
