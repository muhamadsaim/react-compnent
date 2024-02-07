import styled from "styled-components";
import { Select } from "../../components/Select";

export const Wrapper = styled.div`
  background-color: #f7f7f7;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 50px 0px 50px;
  flex-direction: column;
  background-color: white;
  gap: 15x;
  margin: 0;
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const SelectStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SelectStatusMenu = styled(Select)`
  width: 270px;
  /* height: 20px; */
  border-color: black;
  .ant-select-selector {
    padding: 20px 11px !important;
  }
  .ant-select-arrow {
    margin-top: 0;
  }
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
`;
