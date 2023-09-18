import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";
import Header from "../common/Header";
import List from "./List";

export default function UserPost() {
  const navigate = useNavigate();
  const data = ["글 제목 1", "글 제목 2", "글 제목 3"];

  return (
    <St.Container>
      <Header />

      <St.UserPostContainer>
        <St.List onClick={() => navigate("/mypage")}>
          내가 작성한 게시글 목록
        </St.List>
        {data.length > 0 ? (
          data.map((value, index) => <List key={index} title={value} />)
        ) : (
          <St.UserPostForm>작성된 글이 없습니다.</St.UserPostForm>
        )}
      </St.UserPostContainer>
    </St.Container>
  );
}
