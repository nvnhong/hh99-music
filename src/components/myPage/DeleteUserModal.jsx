import styled from "styled-components";
import { CloseIcon } from "../../asset/icon/Icon";
import { deleteUser, getUserInfo } from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearUserId } from "../../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DeleteUserModal({ handleClick }) {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); // 에러 메시지 상태 추가
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);

  const handleSubmitClick = async () => {
    // 비밀번호가 비어있을 경우 에러 메시지 설정
    if (!password) {
      setErrorMsg("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const { id } = await getUserInfo(userId);
      await deleteUser(id, password);
      dispatch(clearUserId());
      handleClick();
      navigate("/");
    } catch (error) {
      if (error.response) {
        // 서버 응답이 있는 경우
        if (error.response.status === 401) {
          // 비밀번호가 틀렸을 때의 처리
          setErrorMsg("비밀번호를 다시 확인해주세요.");
        } else {
          // 다른 서버 오류 처리
          console.error(error.response.data); // 서버에서 반환한 오류 메시지 출력
        }
      } else {
        // 클라이언트 측 오류 처리
        console.error(error);
      }
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
            회원탈퇴를 하시겠습니까? 비밀번호를 입력해주세요.
          </div>

          <div className="mb-4">
            <input
              type="password"
              className={`w-full h-10 px-3 rounded-md border ${
                errorMsg ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
              placeholder="비밀번호"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg(""); // 입력이 발생하면 에러 메시지 초기화
              }}
            />
            {errorMsg && (
              <div className="text-xs text-red-500 mt-2">{errorMsg}</div>
            )}
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
