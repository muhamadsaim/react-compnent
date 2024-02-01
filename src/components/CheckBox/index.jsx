/* eslint-disable react/prop-types */
import { Checkbox } from "antd";

const CheckBox = ({ label, onChange }) => (
  <Checkbox onChange={onChange}>{label}</Checkbox>
);

export default CheckBox;
