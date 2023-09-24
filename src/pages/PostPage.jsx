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
import YoutubeVideo from "../components/postPage/YoutubeVideo";

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

  const likeMutation = useMutation(() => likeComment(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries("onePost");
    },
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div className="container mx-auto">
      <Header />
      <>
        <div className="bg-gray-200 h-80 w-3/4 mx-auto rounded-lg mt-4">
          <YoutubeVideo youtubeUrl={data.url} />
        </div>

        <St.Title>{data.title}</St.Title>

        <h1 className="text-2xl font-bold text-gray-800 mt-4">{data.title}</h1>

        <div className="flex justify-between items-center mt-4">
          <div className="font-semibold text-gray-700">
            <span className="font-bold mr-2">{data.author}</span>
            <div
              className="flex items-center gap-4"
              onClick={() => likeMutation.mutate()}
            >
              <LikeIcon className="w-5 h-5 fill-current text-red-500" />
              <span>{data.likesCount}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mt-4">{data.content}</p>

        <div className="bg-gray-100 p-4 rounded-md mt-6 flex flex-col md:flex-row items-center">
          <textarea
            className="w-full md:w-94 px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none text-white text-sm rounded-lg py-1 px-4 mt-2 md:mt-0 md:ml-2 whitespace-nowrap"
            onClick={() => commentCreateMutation.mutate()}
            style={{ height: "30px" }} // 원하는 높이 값으로 변경
          >
            등록
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">댓글</h2>
          <div className="mt-4">
            {data.commentList.length > 0 &&
              data.commentList.map((value) => (
                <Comment
                  key={value.id}
                  id={value.id}
                  username={value.username}
                  createdAt={value.createdAt}
                  content={value.content}
                  isUsername={value.username === userId}
                />
              ))}
          </div>
        </div>
      </>
    </div>
  );
}
