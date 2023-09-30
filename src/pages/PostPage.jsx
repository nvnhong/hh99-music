import Header from "../components/common/Header";
import Comment from "../components/mainPage/Comment";
import { LikeIcon } from "../asset/icon/Icon";
import { likeComment, createComment, getOnePost } from "../api/api";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import YoutubeVideo from "../components/postPage/YoutubeVideo";
import { validateContents } from "../util/validation";

export default function PostPage() {
  const postId = useLocation().state;
  const { userId } = useSelector((state) => state.user);
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const [contentError, setContentError] = useState("");

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

  const handleCommentCreate = () => {
    const contentError = validateContents(content);
    if (contentError) {
      // 댓글 내용이 유효하지 않을 때 오류 메시지 설정
      setContentError(contentError);
    } else {
      // 댓글 내용이 유효할 때 댓글 생성 함수를 호출하고 오류 메시지 초기화
      commentCreateMutation.mutate();
      setContentError("");
    }
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div className="container mx-auto">
      <Header />
      <>
        <div className="bg-gray-200 h-100 w-2/5 mx-auto rounded-lg mt-4">
          <YoutubeVideo youtubeUrl={data.url} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mt-4 select-none">
          {data.title}
        </h1>

        <div className="flex justify-between items-center mt-4">
          <div className="font-semibold text-gray-700 flex items-center gap-2">
            <span className="text-lg font-bold select-none">{data.author}</span>
            <div className="flex items-center gap-1 ml-10">
              <span
                className="p-2 cursor-pointer"
                onClick={() => likeMutation.mutate()}
              >
                <LikeIcon className="select-none" />
              </span>
              <span className="select-none">{data.likesCount}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mt-4 select-none">{data.content}</p>

        <div className="rounded-md mt-6 flex flex-col md:flex-row items-center">
          <div
            className="w-full md:w-94 px-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
            contenteditable="true"
            onBlur={(e) => setContent(e.target.textContent)}
          >
            {content}
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none text-white text-sm rounded-lg py-1 px-4 mt-2 md:mt-0 md:ml-2 whitespace-nowrap select-none"
            onClick={handleCommentCreate}
            style={{ height: "30px" }}
          >
            등록
          </button>
        </div>
        {contentError && (
          <div className="text-red-400 mt-2 ml-4 text-sm">{contentError}</div>
        )}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 select-none">
            댓글
          </h2>
          <div className="mt-4 select-none flex flex-col gap-y-5">
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
