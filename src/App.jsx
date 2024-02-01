import CustomButton from "./components/Button";
import TypoGraphy from "./components/TypoGraphy";
import TabBar from "./components/TabBar";
import items from "./components/Tab/TabData";
import InputField from "./components/InputField";
import DropDown from "./components/DropDown";
import CheckBox from "./components/CheckBox";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const App = () => (
  <>
    <TypoGraphy level={1} content="Heading 1" />
    <TypoGraphy level={2} content="Heading 2" />
    <TypoGraphy level={3} content="Heading 3" />
    <TypoGraphy level={4} content="Heading 4" />
    <TypoGraphy level={5} content="Heading 5" />
    <TypoGraphy type="paragraph" content="This is a paragraph." />
    <TypoGraphy type="small" content="This is small text." />
    <hr />
    <CustomButton type="primary" />
    <CustomButton type="alternative" />
    <CustomButton type="secondary" />
    <hr />
    <TabBar items={items} defaultActiveKey="1" />
    <hr />
    <InputField label="Label" state="Placeholder" />
    <InputField label="focus" focusLabel="Filled Input" state="focus" />
    <InputField label="success" successLabel="Success " state="success" />
    <InputField label="error" errorLabel="Error" state="error" />
    <hr />
    <DropDown />
    <CheckBox label="Checked" onChange={onChange} />
  </>
);

export default App;
