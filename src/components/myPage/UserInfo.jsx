import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

export default function UserInfo() {
  const navigate = useNavigate();

  return (
    <St.Container>
      <Header />

      <St.UserInfoContainer>
        <St.List onClick={() => navigate("/mypage")}>
          <BiArrowBack /> &nbsp; 개인정보 수정
        </St.List>
        <St.UserInfoForm>
          <St.Row>
            <St.UserInfoTitle>비밀번호</St.UserInfoTitle>
            <St.UserInfoInput />
          </St.Row>
          <St.Row>
            <St.UserInfoTitle>비밀번호 재확인</St.UserInfoTitle>
            <St.UserInfoInput />
          </St.Row>
          <St.Row>
            <St.UserInfoTitle>닉네임</St.UserInfoTitle>
            <St.UserInfoInput />
          </St.Row>
          <St.Row>
            <St.UserInfoTitle>한 줄 자기소개</St.UserInfoTitle>
            <St.UserInfoInput />
          </St.Row>
          <St.Row>
            <St.UserInfoTitle>이메일</St.UserInfoTitle>
            <St.UserInfoInput />
          </St.Row>
          <NavyButton>저장</NavyButton>
        </St.UserInfoForm>
      </St.UserInfoContainer>
    </St.Container>
  );
}
const NavyButton = styled.button`
  color: white;
  background-color: #2d3648;
  border-radius: 5px;
  border: none;
  width: 70px;
  height: 25px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #3498db;
  }
`;
