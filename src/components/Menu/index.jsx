import { Menu } from "antd";

export default function Menuindex() {
  return (
    <Menu
      className="menu-bar"
      mode="horizontal"
      items={[
        {
          key: "1",
          label: "Tab One",
        },
        {
          key: "2",
          label: "Tab Two",
        },
        {
          key: "3",
          label: "Tab Three",
        },
        {
          key: "4",
          label: "Tab Four",
        },
        {
          key: "5",
          label: "Tab Five",
        },
      ]}
    />
  );
}
