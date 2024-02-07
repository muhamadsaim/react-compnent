import { ConfigProvider } from "antd";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#E85B81",
        colorInfo: "#5E48E8",
      },
    }}
  >
    <Dashboard />
  </ConfigProvider>
);

export default App;
