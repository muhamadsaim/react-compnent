import {
  Header,
  List,
  ListItem,
  Main,
  ProjectTitleContainer,
  Title,
  TopHeading,
  Wrapper,
  MainWrapper,
  QuestionContainer,
  CheckBoxes,
  SelectStatus,
  FormMain,
  SelectStatusMenu,
  ImageForm,
  ProjectInfo,
  CityFieldContainer,
  Sidebar,
  IconsContainer,
  ProfileDp,
  CardPortion,
  TermsCard,
  ContractCard,
  CardHeader,
  CardBody,
  CardFooter,
  PriceContainer,
  StyledPinkPara,
} from "./index.styled";
import logo from "../../images/logo.png";
import image from "../../images/img.png";
import { Select } from "../../components/Select";
import Menuindex from "../../components/Menu";
import HomeIcon from "../../assets/icons/Home.svg?react";
import ChatIcon from "../../assets/icons/Chat.svg?react";
import CreditCardIcon from "../../assets/icons/Credit Card.svg?react";
import Logoo from "../../assets/icons/Logo.svg?react";
import MapIcon from "../../assets/icons/Map.svg?react";
import BarChartIcon from "../../assets/icons/Bar Chart.svg?react";
import DropIcon from "../../assets/icons/ellipsis.svg?react";

import {
  Heading2,
  Heading4,
  Heading5,
  Heading6,
  Label,
  Text,
} from "../../components/Typography";
import { Input } from "../../components/Input";
import CheckBox from "../../components/CheckBox";
import { Button } from "../../components/Button";
import { Progress, Popover } from "antd";

export const Dashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.debug(e);
  };

  return (
    <MainWrapper>
      <Sidebar>
        <IconsContainer>
          <Logoo />
          <HomeIcon />
          <ChatIcon />
          <BarChartIcon />
          <MapIcon />
          <CreditCardIcon />
        </IconsContainer>
        <ProfileDp></ProfileDp>
      </Sidebar>

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
                <Heading4>Hayes Valley Studio</Heading4>
                <Label>Edit</Label>
              </ProjectTitleContainer>
            </ProjectInfo>
            <CityFieldContainer>
              <Label>Location</Label>
              <Input placeholder="City Name" required />
            </CityFieldContainer>
            <QuestionContainer>
              <Label>Supply</Label>
              <Text>What types of rental space do you offer?</Text>
              <CheckBoxes>
                <CheckBox label="Open Desks" />
                <CheckBox label="Private Desks" />
                <CheckBox label="Shared Offices" />
                <CheckBox label="Private Offices" />
              </CheckBoxes>
            </QuestionContainer>
            <SelectStatus>
              <Label>Status</Label>
              <SelectStatusMenu placeholder="No Vacancies" />
            </SelectStatus>
            <Button htmlType="submit" type="primary">
              Update Property
            </Button>
          </FormMain>
          <CardPortion>
            <TermsCard>
              <CardHeader>
                <Text>Sublease Terms</Text>
                <Popover title="Edit">
                  <DropIcon />
                </Popover>
              </CardHeader>
              <CardBody>
                <PriceContainer>
                  <Heading2>$425</Heading2>
                  <StyledPinkPara>per desk</StyledPinkPara>
                </PriceContainer>
              </CardBody>
              <CardFooter></CardFooter>
            </TermsCard>
            <ContractCard></ContractCard>
          </CardPortion>

          <ImageForm>
            <img src={image} style={{ width: "90%" }} />
            <Heading6>Get Started</Heading6>
            <Heading5>Sign Up Process</Heading5>
            <Progress percent={50} showInfo={false} size="small" />
          </ImageForm>
        </Main>
      </Wrapper>
    </MainWrapper>
  );
};
