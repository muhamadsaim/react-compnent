import styled from "styled-components";
import { Select } from "../../components/Select";
import { Text } from "../../components/Typography";

export const MainWrapper = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  position: relative;
`;

export const Sidebar = styled.div`
  background-color: white;
  min-width: 70px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const ProfileDp = styled.div``;

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 50px 0px 50px;
  flex-direction: column;
  background-color: white;
  gap: 15x;
  margin: 0;
  /* padding-left: 70px; */
  border-bottom: 1px solid #e1e1e1;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
`;

export const TopHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding-left: 16px;
`;

export const List = styled.ul`
  gap: 30px;
  display: flex;
  list-style: none;
  align-items: center;
`;

export const ListItem = styled.li``;

export const Title = styled.h1`
  margin: 0;
  padding-left: 16px;
`;

export const Main = styled.div`
  display: flex;
  /* height: 1000px; */
  margin: 0;
  padding: 30px 65px;
  /* padding-left: 86px; */
  justify-content: space-between;
`;
export const FormMain = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ProjectTitleContainer = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  gap: 8px;
`;

export const CityFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const QuestionContainer = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ImgBlock = styled.div``;
export const CheckBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* flex-wrap: wrap; */
  gap: 20px;
`;
export const SelectStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SelectStatusMenu = styled(Select)`
  width: 270px;
  height: 44px;
  border-color: black;
  .ant-select-selector {
    padding: 20px 11px !important;
  }
  .ant-select-arrow {
    margin-top: -4px;
  }
`;
export const CardPortion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const TermsCard = styled.div`
  height: 267px;
  width: 320px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ContractCard = styled.div`
  height: 267px;
  width: 320px;
  background-color: white;
  border-radius: 10px;
`;

export const ImageForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 50px;
  border-radius: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;
export const StyledPinkPara = styled(Text)`
  color: #e85b81;
`;
export const CardFooter = styled.div``;
