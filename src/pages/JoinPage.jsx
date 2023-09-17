import useInput from "../hooks/useInput";
import styled from "styled-components";
import * as St from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function JoinPage() {
  const navigate = useNavigate();

  const [idInput, idHandleChange] = useInput("");
  const [pwInput, pwHandleChange] = useInput("");
  const [confirmPwInput, confirmPwHandleChange] = useInput("");
  const [emailInput, emailHandleChange] = useInput("");
  const [nicknameInput, nicknameHandleChange] = useInput("");
  const [bioInput, bioHandleChange] = useInput("");

  const handleLogoClick = () => {
    navigate("/");
  };
  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:4000/sign-up", {
  //       username: idInput,
  //       password: pwInput,
  //       email: emailInput,
  //       nickname: nicknameInput,
  //       intro: bioInput,
  //     });

  //     console.log("새로운 회원가입이 발생하였습니다 ->", response);
  //     if (response.status === 201) {
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.response.data.message);
  //   }
  // };

  return (
    <>
      <CenteredContainer>
        <LogoSize onClick={handleLogoClick}>항해 뮤직</LogoSize>
        <InputTitle>
          <St.Col>
            아이디
            <InputSize type="text" value={idInput} onChange={idHandleChange} />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            비밀번호
            <InputSize
              type="password"
              value={pwInput}
              onChange={pwHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            비밀번호 재확인
            <InputSize
              type="password"
              value={confirmPwInput}
              onChange={confirmPwHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            이메일
            <InputSize
              type="email"
              value={emailInput}
              onChange={emailHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            닉네임
            <InputSize
              type="text"
              value={nicknameInput}
              onChange={nicknameHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            한 줄 자기소개
            <InputSize
              type="text"
              value={bioInput}
              onChange={bioHandleChange}
            />
          </St.Col>
        </InputTitle>

        <div>
          <NavyButton>회원가입</NavyButton>
        </div>
      </CenteredContainer>
    </>
  );
}
const NavyButton = styled.button`
  color: white;
  background-color: #2d3648;
  border-radius: 5px;
  border: none;
  width: 75px;
  height: 34px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #3498db;
  }
`;
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh; /* 화면 세로 중앙 정렬 */
`;

const InputTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  user-select: none;
`;
const InputSize = styled.input`
  width: 250px;
  height: 28px;
  font-size: 18px;
`;
const LogoSize = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  user-select: none;
  cursor: pointer;
`;
