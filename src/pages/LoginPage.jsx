import useInput from "../hooks/useInput";
import styled from "styled-components";
import * as St from "../styles/Styles";

export default function LoginPage() {
  const [idInput, idHandleChange] = useInput("");
  const [pwInput, pwHandleChange] = useInput("");

  return (
    <>
      <CenteredContainer>
        <header>Logo</header>
        <InputTitle>
          <St.Col>
            아이디
            <input type="text" value={idInput} onChange={idHandleChange} />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            비밀번호
            <input type="password" value={pwInput} onChange={pwHandleChange} />
          </St.Col>
        </InputTitle>
        <div>
          <NavyButton>로그인</NavyButton>
        </div>
        <ToJoin>항해뮤직의 회원이 아니신가요? 회원가입하기</ToJoin>
      </CenteredContainer>
    </>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 세로 중앙 정렬 */
`;

const NavyButton = styled.button`
  color: white;
  background-color: #2d3648;
  border-radius: 5px;
  border: none;
  width: 70px;
  height: 24px;
  font-size: 11px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #3498db;
  }
`;
const InputTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
`;
const ToJoin = styled.div`
  font-size: 10px;
  margin-top: 10px;
`;
