import { Menu } from "antd";

export default function Menuindex() {
  return (
    <Menu
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
