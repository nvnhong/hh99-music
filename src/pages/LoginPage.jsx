import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/slice/userSlice";
import { getUserName } from "../api/api";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [idInput, idHandleChange] = useInput("");
  const [pwInput, pwHandleChange] = useInput("");

  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogoClick = () => {
    navigate("/main");
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
        navigate("/main");
      }
    } catch (error) {
      console.log(error);
      if (error.response.data === "아이디 또는 비밀번호가 틀렸습니다.") {
        setErrorMsg("아이디나 비밀번호를 다시 확인바랍니다");
      }
    }
  };

  const kakaoLoginHandler = () => {
    const REST_API_KEY = import.meta.env.VITE_REACT_APP_KAKAO_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REACT_APP_KAKAO_REDIRECT_URI;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const code = new URL(link).searchParams.get("code");
    console.log({ code });
    // console.log("카카오 로그인 버튼 클릭");
    // window.location.href = link;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div
          className="font-양진체 font-bold text-2xl mb-3 text-red-400 select-none cursor-pointer"
          onClick={handleLogoClick}
        >
          항해 뮤직 🎧
        </div>
        <div className="mb-4">
          <label className="text-m font-bold mb-2">아이디</label>
          <br />
          <input
            className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            type="text"
            value={idInput}
            onChange={idHandleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-m font-bold mb-2">비밀번호</label>
          <br />
          <input
            type="password"
            value={pwInput}
            onChange={pwHandleChange}
            className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
          />
          {errorMsg && (
            <div className="text-sm text-red-500 p-2 rounded-md mt-2 text-center select-none">
              {errorMsg}
            </div>
          )}
        </div>
        <div className="mb-4">
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center select-none"
            onClick={onLoginHandler}
          >
            로그인
          </button>
        </div>
        <div className="mb-4">
          <button className="select-none" onClick={kakaoLoginHandler}>
            <img
              src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
              width="180"
              alt="카카오 로그인 버튼"
            />
          </button>
        </div>
        <div className="text-sm">
          항해뮤직의 회원이 아니신가요?{" "}
          <span
            className="font-bold text-red-400 cursor-pointer"
            onClick={handleJoinClick}
          >
            회원가입하기
          </span>
        </div>
      </div>
    </>
  );
}
