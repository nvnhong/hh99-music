import useInput from "../hooks/useInput";
import styled from "styled-components";
import * as St from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();

  const [idInput, idHandleChange] = useInput("");
  const [pwInput, pwHandleChange] = useInput("");

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleJoinClick = () => {
    navigate("/join");
  };

  // const onLoginHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:4000/login", {
  //       username: idInput,
  //       password: pwInput,
  //     });
  //     if (response.status === 201) {
  //       navigate("/");
  //     }
  //   } catch (error) {
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
        <div>
          <NavyButton>로그인</NavyButton>
        </div>
        <ToJoin onClick={handleJoinClick}>
          항해뮤직의 회원이 아니신가요?
          <BoldTextForJoin>회원가입하기</BoldTextForJoin>
        </ToJoin>
      </CenteredContainer>
    </>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh; /* 화면 세로 중앙 정렬 */
`;

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
const InputTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  user-select: none;
`;
const ToJoin = styled.div`
  font-size: 14px;
  margin-top: 10px;
  user-select: none;
`;
const BoldTextForJoin = styled.span`
  font-weight: bold;
  margin-left: 3px;
  user-select: none;
  cursor: pointer;
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
