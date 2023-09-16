import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import UserPost from "../components/myPage/UserPost";
import * as St from "../styles/Styles";

export default function MyPage() {
  const navigate = useNavigate();

  return (
    <St.Container>
      <Header>
        <h1>Logo</h1>
        <button>프로필</button>
      </Header>

      <St.ListGroup>
        <St.List onClick={() => navigate("/mypage/userinfo")}>
          개인정보 수정
        </St.List>
        <St.List onClick={() => navigate("/mypage/userpost")}>
          내가 작성한 게시글 목록
        </St.List>
      </St.ListGroup>
    </St.Container>
  );
}
