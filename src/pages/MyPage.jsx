import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import * as St from "../styles/Styles";

export default function MyPage() {
  const navigate = useNavigate();

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

        <St.List onClick={() => navigate("/")}>로그아웃</St.List>
      </St.ListGroup>
    </St.Container>
  );
}
