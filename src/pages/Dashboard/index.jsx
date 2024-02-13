import {
  Header,
  Main,
  ProjectTitleContainer,
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
  StyledGrayPara,
  ContractCardBody,
  ContractCardContent,
  ContractCardFooter,
  StyledGreenPara,
  Profile,
  ProfileInfo,
  ImageContainer,
  ProfileDetails,
  ProfileSetting,
  ProfileImage,
  ProfileDetailSubHeadings,
  ProfileDetailSubHeading,
  EditProfileButton,
  SizeOfObject,
  Chart,
  OccupancyChart,
  UsageChart,
  StyledEllipseIcon,
  StyledGrayLightPara,
  ContractCardHeader,
  Divider,
  EllipseContainer,
  GreenEllipseContainer,
  StyledPinIcon,
} from "./index.styled";
import Menuindex from "../../components/Menu";
import HomeIcon from "../../assets/icons/Home.svg?react";
import ChatIcon from "../../assets/icons/Chat.svg?react";
import CreditCardIcon from "../../assets/icons/Credit Card.svg?react";
import Logoo from "../../assets/icons/Logo.svg?react";
import MapIcon from "../../assets/icons/Map.svg?react";
import BarChartIcon from "../../assets/icons/Bar Chart.svg?react";
import DropIcon from "../../assets/icons/ellipsis.svg?react";
import BellIcon from "../../assets/icons/Bell.svg?react";
import ContractCardDp from "../../images/DpCard.svg?react";
import Img from "../../images/Profile.png";
import ChairImg from "../../images/chair.svg?react;";
import PurpleEllipse from "../../assets/icons/PurpleEllipse.svg?react";
import GreenEllipse from "../../assets/icons/GreenEllipse.svg?react";

import SuccessIcon from "../../assets/icons/Success.svg?react";
import {
  Heading2,
  Heading3,
  Heading4,
  Label,
  Text,
} from "../../components/Typography";
import { Input } from "../../components/Input";
import CheckBox from "../../components/CheckBox";
import { Button } from "../../components/Button";
import { Tooltip, Dropdown } from "antd";
import { BarChart } from "../../components/BarChart";

export const Dashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.debug(e);
  };

  const items = [
    {
      label: "1st menu item",
      key: "0",
    },
    {
      label: "2nd menu item",
      key: "1",
    },
    {
      label: "3rd menu item",
      key: "2",
    },
  ];

  const chart1Data = [
    {
      type: "家具家电",
      sales: 22,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 43,
    },
    {
      type: "美容洗护",
      sales: 32,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "进口食品",
      sales: 54,
    },
    {
      type: "食品饮料",
      sales: 38,
    },
  ];
  const chart2Data = [
    {
      type: "家具家电",
      sales: 22,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 33,
    },
    {
      type: "美容洗护",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 76,
    },
    {
      type: "进口食品",
      sales: 38,
    },
    {
      type: "食品饮料",
      sales: 87,
    },
  ];

  return (
    <MainWrapper>
      <Sidebar>
        <IconsContainer>
          <Divider>
            <Logoo />
          </Divider>
          <HomeIcon />
          <ChatIcon />
          <BarChartIcon />
          <MapIcon />
          <CreditCardIcon />
        </IconsContainer>
        <ProfileDp>
          <img
            src={Img}
            style={{ width: "50px", borderRadius: "50px", objectFit: "cover" }}
          />
          <GreenEllipseContainer>
            <GreenEllipse />
          </GreenEllipseContainer>
        </ProfileDp>
      </Sidebar>

      <Wrapper>
        <Header>
          <Profile>
            <ProfileInfo>
              <ImageContainer>
                <ProfileImage src={Img} />
                <EllipseContainer>
                  <PurpleEllipse />
                </EllipseContainer>
              </ImageContainer>
              <ProfileDetails>
                <Heading2>Sarvis and June</Heading2>
                <ProfileDetailSubHeading>
                  <ProfileDetailSubHeadings>
                    <Heading4>8</Heading4>
                    <StyledGrayPara>Properties</StyledGrayPara>
                  </ProfileDetailSubHeadings>
                  <ProfileDetailSubHeadings>
                    <Heading4>37</Heading4>
                    <StyledGrayPara>Sub-tenants</StyledGrayPara>
                  </ProfileDetailSubHeadings>
                </ProfileDetailSubHeading>
              </ProfileDetails>{" "}
            </ProfileInfo>
            <ProfileSetting>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <StyledEllipseIcon />
              </Dropdown>
              <EditProfileButton type="default">Edit Profile</EditProfileButton>
            </ProfileSetting>
          </Profile>
          <Menuindex />
        </Header>
        <Main>
          <FormMain onSubmit={handleSubmit}>
            <ProjectInfo>
              <Label>Name</Label>
              <ProjectTitleContainer>
                <Heading2>Hayes Valley Studio</Heading2>
                <Label>Edit</Label>
              </ProjectTitleContainer>
            </ProjectInfo>
            <CityFieldContainer>
              <Label>Location</Label>
              <Input
                prefix={<StyledPinIcon />}
                placeholder="City Name"
                required
              />
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
                <Tooltip title="Edit">
                  <DropIcon />
                </Tooltip>
              </CardHeader>
              <CardBody>
                <PriceContainer>
                  <Heading2 style={{ fontSize: "38px;" }}>$425</Heading2>
                  <StyledPinkPara>per desk</StyledPinkPara>
                </PriceContainer>
                <StyledGrayPara>Minimum Of 6 Months</StyledGrayPara>
              </CardBody>
              <CardFooter>
                <BellIcon />
                <Text>Monday, June 1</Text>
              </CardFooter>
            </TermsCard>
            <ContractCard>
              <ContractCardHeader>
                <Text>Management</Text>
                <Tooltip title="Edit">
                  <DropIcon />
                </Tooltip>
              </ContractCardHeader>
              <ContractCardBody>
                <ContractCardDp />
                <ContractCardContent>
                  <Heading3>Silvia Guerro</Heading3>
                  <StyledGrayPara>(415)- 888 - 2332</StyledGrayPara>
                </ContractCardContent>
              </ContractCardBody>
              <ContractCardFooter>
                <SuccessIcon />
                <StyledGreenPara>Contract Signed</StyledGreenPara>
              </ContractCardFooter>
            </ContractCard>
          </CardPortion>
          <ImageForm>
            <img
              src={ChairImg}
              style={{
                width: "100%",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            />
            <SizeOfObject>
              <StyledGrayPara>Size</StyledGrayPara>
              <Text>1,350 sqft</Text>
            </SizeOfObject>
            <Chart>
              <OccupancyChart>
                <StyledGrayLightPara>Occupancy</StyledGrayLightPara>
                <BarChart data={chart1Data} color="#5E48E8" />
              </OccupancyChart>
              <UsageChart>
                <StyledGrayLightPara>Usage</StyledGrayLightPara>
                <BarChart data={chart2Data} color="#E1E1E1" />
              </UsageChart>
            </Chart>
          </ImageForm>
        </Main>
      </Wrapper>
    </MainWrapper>
  );
};
