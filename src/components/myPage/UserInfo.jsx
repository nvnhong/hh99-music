import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UpdateUserModal from "./UpdateUserModal";
import useModal from "../../hooks/useModal";

export default function UserInfo() {
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const { userId } = useSelector((state) => state.user);
  const modal = useSelector((state) => state.modal);
  const { handleOpenModal, handleCloseModal } = useModal();

  const emailHandleChange = (e) => {
    setEmail(e.target.value);
  };
  const bioHandleChange = (e) => {
    setBio(e.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }users/profile?username=${userId}`,
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
            withCredentials: true,
          }
        );

        const userInfo = data.data;

        setEmail(userInfo.email);
        setBio(userInfo.intro);
      } catch (error) {
        console.error("회원 정보 가져오기 오류:", error);
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <St.Container>
      <Header />

      <St.UserInfoContainer>
        <St.List onClick={() => navigate("/mypage")}>
          <BiArrowBack /> &nbsp; 개인정보 수정
        </St.List>
        <St.UserInfoForm>
          <St.Row>
            <div className="mt-0.5 mr-3">한 줄 자기소개</div>
            <input
              className="w-64 px-3 py-0.5 mb-1 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              value={bio}
              onChange={bioHandleChange}
            />
          </St.Row>
          <St.Row>
            <div className="mt-0.5 mr-3 ml-9">이메일</div>
            <input
              className="w-64 px-3 py-0.5 mt-1 mb-1 ml-3 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              type="email"
              value={email}
              onChange={emailHandleChange}
            />
          </St.Row>
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 select-none"
            onClick={() => handleOpenModal("updateUserModal")}
          >
            수정
          </button>
        </St.UserInfoForm>
      </St.UserInfoContainer>

      {modal.updateUserModal && (
        <UpdateUserModal
          userId={userId}
          email={email}
          bio={bio}
          handleClick={() => handleCloseModal("updateUserModal")}
        />
      )}
    </St.Container>
  );
}
