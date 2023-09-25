import styled from "styled-components";
import { CloseIcon } from "../../asset/icon/Icon";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UpdateUserModal({ userId, email, bio, handleClick }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitClick = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_REACT_APP_URL}users/profile`,
        {
          username: userId,
          password: password,
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
        handleClick();
        navigate("/mypage");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Background onClick={handleClick} />
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
          <div className="flex justify-end">
            <button onClick={handleClick} className="p-3 mb-1">
              <CloseIcon />
            </button>
          </div>

          <div className="text-center mb-3 select-none">
            개인정보를 수정하기 위해 비밀번호를 입력해주세요.
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="w-16 h-8 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white rounded-md text-sm font-medium hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 focus:outline-none select-none"
              onClick={handleSubmitClick}
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;
