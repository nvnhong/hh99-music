import useInput from "../hooks/useInput";
import styled from "styled-components";
import * as St from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/slice/userSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [idInput, idHandleChange] = useInput("");
  const [pwInput, pwHandleChange] = useInput("");

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleJoinClick = () => {
    navigate("/join");
  };

  // 로그인 post
  /*
    1. 로그인이 성공한다면
      1.1 토큰을 저장
      1.2 전역상태에(redux) 사용자 정보 저장
    
    2. 전역 상태 값으로 관리하고 있는 사용자 정보는
      2.1 Header에 ㅇㅇㅇ님을 표현한다는 사용 O
      2.2 백엔드와 api 통신을 할 때 전역 상태 값으로 관리하는 사용자 정보를 불러와서 사용할 수 있습니다.
  */
  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}users/login`,
        {
          username: idInput,
          password: pwInput,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log(response);
        const accessToken = response.headers["authorization"];
        localStorage.setItem("accessToken", accessToken);
        dispatch(setUserId(idInput));
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("로그인 중에 오류가 발생했습니다.");
      }
    }
  };

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
          <NavyButton onClick={onLoginHandler}>로그인</NavyButton>
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
