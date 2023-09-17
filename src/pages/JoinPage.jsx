import useInput from "../hooks/useInput";
import styled from "styled-components";
import * as St from "../styles/Styles";

export default function JoinPage() {
  const [idInput, idHandleChange] = useInput("");
  const [pwInput, pwHandleChange] = useInput("");
  const [confirmPwInput, confirmPwHandleChange] = useInput("");
  const [emailInput, emailHandleChange] = useInput("");
  const [nicknameInput, nicknameHandleChange] = useInput("");
  const [bioInput, bioHandleChange] = useInput("");

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
        <InputTitle>
          <St.Col>
            비밀번호 재확인
            <input
              type="password"
              value={confirmPwInput}
              onChange={confirmPwHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            이메일
            <input
              type="email"
              value={emailInput}
              onChange={emailHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            닉네임
            <input
              type="text"
              value={nicknameInput}
              onChange={nicknameHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            한 줄 자기소개
            <input type="text" value={bioInput} onChange={bioHandleChange} />
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
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 세로 중앙 정렬 */
`;

const InputTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
`;
