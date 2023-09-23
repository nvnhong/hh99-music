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
  const [bioInput, bioHandleChange] = useInput("");

  const handleLogoClick = () => {
    navigate("/");
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
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
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
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
              className="w-64 px-4 py-1 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              type="password"
              value={pwInput}
              onChange={pwHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            비밀번호 재확인
            <input
              className="w-64 px-4 py-1 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
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
              className="w-64 px-4 py-1 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              value={emailInput}
              onChange={emailHandleChange}
            />
          </St.Col>
        </InputTitle>
        <InputTitle>
          <St.Col>
            한 줄 자기소개
            <input
              className="w-64 px-4 py-1 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              value={bioInput}
              onChange={bioHandleChange}
            />
          </St.Col>
        </InputTitle>

        <div>
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 select-none"
            onClick={onSubmitHandler}
          >
            회원가입
          </button>
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
