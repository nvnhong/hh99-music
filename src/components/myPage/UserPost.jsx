import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";
import Header from "../common/Header";
import List from "./List";
import { useQuery } from "react-query";
import { getMyPost } from "../../api/api";
import { useSelector } from "react-redux";

export default function UserPost() {
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.user);
  const { isLoading, error, data } = useQuery("post", () => getMyPost(userId));

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <St.Container>
      <Header />

      <St.UserPostContainer>
        <St.List onClick={() => navigate("/mypage")}>
          내가 작성한 게시글 목록
        </St.List>
        {data.length > 0 ? (
          data.map((value) => (
            <List
              key={value.id}
              id={value.id}
              title={value.title}
              handleClick={() => navigate("/post", { state: value.id })}
            />
          ))
        ) : (
          <St.UserPostForm>작성된 글이 없습니다.</St.UserPostForm>
        )}
      </St.UserPostContainer>
    </St.Container>
  );
}
