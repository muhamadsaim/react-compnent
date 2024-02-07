import { ConfigProvider } from "antd";
import "./App.css";
import { Home } from "./pages/Home";

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#E85B81",
        colorInfo: "#5E48E8",
      },
    }}
  >
    <Home />
  </ConfigProvider>
);

export default App;
