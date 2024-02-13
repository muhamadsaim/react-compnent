import { StyledMenu } from "./index.styled";

export default function Menuindex() {
  return (
    <StyledMenu
      className="menu-bar"
      mode="horizontal"
      defaultSelectedKeys={"1"}
      items={[
        {
          key: "1",
          label: "Properties",
        },
        {
          key: "2",
          label: "Sub-tenants",
        },
        {
          key: "3",
          label: "Settings",
        },
      ]}
    />
  );
}
