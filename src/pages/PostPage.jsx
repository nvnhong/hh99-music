import * as St from "../styles/Styles";
import Header from "../components/common/Header";
import Comment from "../components/mainPage/Comment";
import { LikeIcon } from "../asset/icon/Icon";
import { likeComment, createComment, getOnePost, deletePost } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function PostPage() {
  const postId = useLocation().state;
  const { userId } = useSelector((state) => state.user); // username
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // 게시글 단일 조회
  const { isLoading, error, data } = useQuery("onePost", () =>
    getOnePost(postId)
  );

  // 댓글 생성
  const commentCreateMutation = useMutation(
    () => createComment(postId, { username: userId, content }),
    {
      onSuccess: () => {
        setContent("");
        queryClient.invalidateQueries("onePost");
      },
    }
  );

  const deletePostMutation = useMutation(() => deletePost(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      navigate("/main");
    },
  });

  const likeMutation = useMutation(() => likeComment(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries("onePost");
    },
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <St.Container>
      <Header />

      {data.author === userId && (
        <div>
          <button onClick={() => navigate("/post/update", { state: postId })}>
            수정
          </button>
          <button onClick={() => deletePostMutation.mutate()}>삭제</button>
        </div>
      )}

      <>
        <St.Video />

        <St.Title>{data.title}</St.Title>

        <PostInfo>
          <Username>{data.author}</Username>
          <LikeContainer onClick={() => likeMutation.mutate()}>
            <LikeIcon />
            {data.likesCount}
          </LikeContainer>
        </PostInfo>

        <St.Content>{data.content}</St.Content>

        <St.Comment>
          <textarea
            className="w-64 px-4 py-1 mt-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 mt-4 ml-2 select-none flex items-center"
            onClick={() => commentCreateMutation.mutate()}
          >
            등록
          </button>
        </St.Comment>

        <CommentContainer>
          {data.commentList.length > 0 &&
            data.commentList.map((value) => {
              return (
                <Comment
                  key={value.id}
                  id={value.id}
                  username={value.username}
                  createdAt={value.createdAt}
                  content={value.content}
                  isUsername={value.username === userId}
                />
              );
            })}
        </CommentContainer>
      </>
    </St.Container>
  );
}

const PostInfo = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px;
`;

const Username = styled.div`
  font-weight: bold;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CommentContainer = styled.div`
  margin: 0 30px;
`;
