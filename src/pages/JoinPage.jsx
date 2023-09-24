import useInput from "../hooks/useInput";
import axios from "axios";
import { getUserName, loginUser } from "../api/api";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/slice/userSlice";
import { useState } from "react";
import {
  validateUsername,
  validatePassword,
  validateEmail,
} from "../util/validation";
import { useNavigate } from "react-router-dom";

export default function JoinPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [idInput, idHandleChange] = useInput("");
  const [pwInput, pwHandleChange] = useInput("");
  const [confirmPwInput, confirmPwHandleChange] = useInput("");
  const [emailInput, emailHandleChange] = useInput("");
  const [bioInput, bioHandleChange] = useInput("");
  const [errorMsg, setErrorMsg] = useState({
    username: null,
    password: null,
    confirmPassword: null,
    email: null,
    bio: null,
  });

  const handleLogoClick = () => {
    // 로고 클릭 시 동작 정의
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // 각 인풋 필드의 유효성 검사
    const usernameError = validateUsername(idInput);
    const passwordError = validatePassword(pwInput);
    const confirmPasswordError =
      pwInput !== confirmPwInput ? "비밀번호가 일치하지 않습니다." : "";
    const emailError = validateEmail(emailInput);
    const bioError = !bioInput ? "한 줄 자기소개를 입력하세요." : "";

    // 에러 메시지 설정
    setErrorMsg({
      username: usernameError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      email: emailError,
      bio: bioError,
    });

    // 에러가 하나라도 있으면 회원가입 요청을 보내지 않음
    if (
      usernameError ||
      passwordError ||
      confirmPasswordError ||
      emailError ||
      bioError
    ) {
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}users/signup`,
        {
          username: idInput,
          password: pwInput,
          email: emailInput,
          intro: bioInput,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("새로운 회원가입이 발생하였습니다 ->", response);
      if (response.status === 200) {
        await loginUser(idInput, pwInput);
        const userId = await getUserName(localStorage.getItem("accessToken"));
        dispatch(setUserId(userId));
        navigate("/main");
        // 회원가입 성공 시 처리
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderErrorMessage = (error) => {
    return error ? <div className="text-red-500 mt-2">{error}</div> : null;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-15">
      <div
        className="font-양진체 text-2xl mb-3 font-bold select-none text-red-400"
        onClick={handleLogoClick}
      >
        항해 뮤직 🎧
      </div>
      <div className="w-80">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-bold text-gray-700 "
          >
            아이디
          </label>
          <input
            id="username"
            className={`w-full px-3 py-2 border rounded-md ${
              errorMsg.username ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-red-500`}
            type="text"
            value={idInput}
            onChange={idHandleChange}
          />
          {errorMsg.username && (
            <div className="text-xs text-red-500 mt-2">{errorMsg.username}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-bold text-gray-700"
          >
            비밀번호
          </label>
          <input
            id="password"
            className={`w-full px-3 py-2 border rounded-md ${
              errorMsg.password ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-red-500`}
            type="password"
            value={pwInput}
            onChange={pwHandleChange}
          />
          {errorMsg.password && (
            <div className="text-xs text-red-500 mt-2">{errorMsg.password}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-bold text-gray-700"
          >
            비밀번호 재확인
          </label>
          <input
            id="confirmPassword"
            className={`w-full px-3 py-2 border rounded-md ${
              errorMsg.confirmPassword ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-red-500`}
            type="password"
            value={confirmPwInput}
            onChange={confirmPwHandleChange}
          />
          {errorMsg.confirmPassword && (
            <div className="text-xs text-red-500 mt-2">
              {errorMsg.confirmPassword}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700"
          >
            이메일
          </label>
          <input
            id="email"
            className={`w-full px-3 py-2 border rounded-md ${
              errorMsg.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-red-500`}
            value={emailInput}
            onChange={emailHandleChange}
          />
          {errorMsg.email && (
            <div className="text-xs text-red-500 mt-2">{errorMsg.email}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="bio"
            className="block text-sm font-bold text-gray-700"
          >
            한 줄 자기소개
          </label>
          <input
            id="bio"
            className={`w-full px-3 py-2 border rounded-md ${
              errorMsg.bio ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-red-500`}
            value={bioInput}
            onChange={bioHandleChange}
          />
          {errorMsg.bio && (
            <div className="text-xs text-red-500 mt-2">{errorMsg.bio}</div>
          )}
        </div>
      </div>

      <button
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6 select-none"
        onClick={onSubmitHandler}
      >
        회원가입
      </button>
    </div>
  );
}
