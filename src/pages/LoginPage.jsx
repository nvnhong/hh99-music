import useInput from "../hooks/useInput";
import styled from "styled-components";
import * as St from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/slice/userSlice";
import { getUserName } from "../api/api";

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
        const accessToken = response.headers["authorization"];
        const refreshToken = response.headers["authorization_refresh"];
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        const userId = await getUserName(accessToken);
        dispatch(setUserId(userId));
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

  const kakaoLoginHandler = () => {
    const REST_API_KEY = import.meta.env.VITE_REACT_APP_KAKAO_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REACT_APP_KAKAO_REDIRECT_URI;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;
  };

  return (
    <>
      <CenteredContainer>
        <div
          className="font-양진체 text-2xl mb-3 font-bold select-none text-red-400"
          onClick={handleLogoClick}
        >
          항해 뮤직 🎧
        </div>
        <InputTitle>
          <St.Col>
            아이디
            <input
              className="w-64 px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              type="text"
              value={idInput}
              onChange={idHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            비밀번호
            <input
              type="password"
              value={pwInput}
              onChange={pwHandleChange}
              className="w-64 px-4 py-1 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            />
          </St.Col>
        </InputTitle>
        <div>
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 select-none"
            onClick={onLoginHandler}
          >
            로그인
          </button>
        </div>
        <div>
          <button className="select-none" onClick={() => kakaoLoginHandler()}>
            <img
              src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
              width="180"
              alt="카카오 로그인 버튼"
            />
          </button>
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
