import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import * as St from "../styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { clearUserId } from "../redux/slice/userSlice";
import DeleteUserModal from "../components/myPage/DeleteUserModal";
import useModal from "../hooks/useModal";

export default function MyPage() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { handleOpenModal, handleCloseModal } = useModal();
  const navigate = useNavigate();
  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem("accessToken");
    // 사용자 로그아웃 상태로 설정 (redux 등을 사용하여 전역 상태 관리 중이라면 여기서 상태를 업데이트)
    dispatch(clearUserId());
    // 또는 상태를 초기화하거나 사용자 정보를 삭제할 수 있습니다.
    navigate("/");
  };

  return (
    <St.Container>
      <Header>
        <button>프로필</button>
      </Header>

      <St.ListGroup>
        <St.List onClick={() => navigate("/mypage/userinfo")}>
          개인정보 수정
        </St.List>

        <St.List onClick={() => navigate("/mypage/userpost")}>
          내가 작성한 게시글 목록
        </St.List>

        <St.List onClick={() => handleLogout()}>로그아웃</St.List>

        <St.List onClick={() => handleOpenModal("deleteUserModal")}>
          회원탈퇴
        </St.List>
      </St.ListGroup>

      {modal.deleteUserModal && (
        <DeleteUserModal
          handleClick={() => handleCloseModal("deleteUserModal")}
        />
      )}
    </St.Container>
  );
}
