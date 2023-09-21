import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserInfo() {
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const emailHandleChange = (e) => {
    setEmail(e.target.value);
  };
  const bioHandleChange = (e) => {
    setBio(e.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }users/profile?username=asdasdasd`,
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
            withCredentials: true,
          }
        );

        const userInfo = response.data;

        setEmail(userInfo.email);
        setBio(userInfo.intro);
      } catch (error) {
        console.error("회원 정보 가져오기 오류:", error);
      }
    }

    fetchUserInfo();
  }, []);

  const onSaveHandler = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_REACT_APP_URL}users/profile`,
        {
          username: "asdasdasd",
          password: pw,
          email: email,
          intro: bio,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("accessToken"),
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("회원 정보가 성공적으로 업데이트되었습니다.");
        navigate("/mypage");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("회원 정보 업데이트 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <St.Container>
      <Header />

      <St.UserInfoContainer>
        <St.List onClick={() => navigate("/mypage")}>
          <BiArrowBack /> &nbsp; 개인정보 수정
        </St.List>
        <St.UserInfoForm>
          <St.Row>
            <St.UserInfoTitle>한 줄 자기소개</St.UserInfoTitle>
            <St.UserInfoInput value={bio} onChange={bioHandleChange} />
          </St.Row>
          <St.Row>
            <St.UserInfoTitle>이메일</St.UserInfoTitle>
            <St.UserInfoInput
              type="email"
              value={email}
              onChange={emailHandleChange}
            />
          </St.Row>
          <NavyButton onClick={onSaveHandler}>저장</NavyButton>
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
