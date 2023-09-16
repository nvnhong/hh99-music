import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";
import Header from "../common/Header";

export default function UserPost() {
  const navigate = useNavigate();

  return (
    <St.Container>
      <Header>
        <h1>Logo</h1>
        <button>프로필</button>
      </Header>

      <St.UserPostContainer>
        <St.List onClick={() => navigate("/mypage")}>
          내가 작성한 게시글 목록
        </St.List>

        <St.UserPostForm>
          <div>글 제목 1</div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </St.UserPostForm>

        <St.UserPostForm>
          <div>글 제목 2</div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </St.UserPostForm>

        <St.UserPostForm>
          <div>글 제목 3</div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </St.UserPostForm>
      </St.UserPostContainer>
    </St.Container>
  );
}
