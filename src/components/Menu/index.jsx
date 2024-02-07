import { StyledMenu } from "./index.styled";

export default function Menuindex() {
  return (
    <StyledMenu
      className="menu-bar"
      mode="horizontal"
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
