import styled from "styled-components";
import * as St from "../../styles/Styles";
import { CloseIcon } from "../../asset/icon/Icon";
import { deleteUser } from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearUserId } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

export default function DeleteUserModal({ handleClick }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitClick = async () => {
    await deleteUser(password);
    dispatch(clearUserId());
    navigate("/");
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
            회원탈퇴를 하시겠습니까? 비밀번호를 입력해주세요.
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
              탈퇴
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
