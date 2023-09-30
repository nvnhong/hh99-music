import { useNavigate } from "react-router-dom";
import * as St from "../../styles/Styles";
import Header from "../common/Header";
import List from "./List";
import { useMutation, useQuery } from "react-query";
import { deletePost, getMyPost } from "../../api/api";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

export default function UserPost() {
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.user);
  const { isLoading, error, data, refetch } = useQuery("post", () =>
    getMyPost(userId)
  );

  const deletePostMutation = useMutation((id) => deletePost(id), {
    onSuccess: () => {
      refetch();
    },
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <St.Container>
      <Header />

      <St.UserPostContainer>
        <St.List onClick={() => navigate("/mypage")} className="select-none">
          <BiArrowBack className="select-none" /> &nbsp;내가 작성한 게시글 목록
        </St.List>
        {data.length > 0 ? (
          data.map((value) => (
            <List
              key={value.id}
              id={value.id}
              title={value.title}
              handleClick={() => navigate("/post", { state: value.id })}
              deletePostMutation={deletePostMutation}
            />
          ))
        ) : (
          <div className="p-2 flex justify-center select-none text-red-400">
            작성된 글이 없습니다.
          </div>
        )}
      </St.UserPostContainer>
    </St.Container>
  );
}
