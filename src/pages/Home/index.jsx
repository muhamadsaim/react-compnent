import {
  Header,
  List,
  ListItem,
  Main,
  ProjectTitleContainer,
  Title,
  TopHeading,
  Wrapper,
  QuestionContainer,
  CheckBoxes,
  SelectStatus,
  FormMain,
  SelectStatusMenu,
  ImageForm,
  ProjectInfo,
  CityFieldContainer,
} from "./index.styled";
import logo from "../../images/logo.png";
import image from "../../images/img.png";
import { Select } from "../../components/Select";
import Menuindex from "../../components/Menu";
import {
  Heading2,
  Heading5,
  Heading6,
  Label,
  Text,
} from "../../components/Typography";
import { Input } from "../../components/Input";
import CheckBox from "../../components/CheckBox";
import { Button } from "../../components/Button";
import { Progress } from "antd";

export const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.debug(e);
  };
  return (
    <Wrapper>
      <Header>
        <TopHeading>
          <img src={logo} />
          <List>
            <ListItem>Page One</ListItem>
            <ListItem>Page Two</ListItem>
            <ListItem>Page Three</ListItem>
            <ListItem>|</ListItem>
            <ListItem>
              <Select variant="borderless" placeholder="Account" />
            </ListItem>
          </List>
        </TopHeading>
        <Title>Page Title</Title>
        <Menuindex />
      </Header>
      <Main>
        <FormMain onSubmit={handleSubmit}>
          <ProjectInfo>
            <Label>Name</Label>
            <ProjectTitleContainer>
              <Heading2>Project title</Heading2>
              <Label>Edit</Label>
            </ProjectTitleContainer>
          </ProjectInfo>
          <CityFieldContainer>
            <Label>City</Label>
            <Input placeholder="City Name" required />
          </CityFieldContainer>
          <QuestionContainer>
            <Label>Question</Label>
            <Text>What are the options that you need?</Text>
            <CheckBoxes>
              <CheckBox label="Option 1" />
              <CheckBox label="Option 2" />
              <CheckBox label="Option 3" />
              <CheckBox label="Option 4" />
            </CheckBoxes>
          </QuestionContainer>
          <SelectStatus>
            <Label>Status</Label>
            <SelectStatusMenu placeholder="Select Status" />
          </SelectStatus>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </FormMain>

        <ImageForm>
          <img src={image} style={{ width: "90%" }} />
          <Heading6>Get Started</Heading6>
          <Heading5>Sign Up Process</Heading5>
          <Progress percent={50} showInfo={false} size="small" />
        </ImageForm>
      </Main>
    </Wrapper>
  );
};
