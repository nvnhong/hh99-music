import Header from "../components/common/Header";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { axiosInstance } from "../api/axiosInstance";
import { updatePost } from "../api/api";
import { validateContent } from "../util/validation";

export default function UpdatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const postId = useLocation().state;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 오류 메시지를 저장할 상태 변수
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    url: "",
    content: "",
  });

  const { isLoading, error, data } = useQuery("onePost", async () => {
    const { data } = await axiosInstance.get(`posts/${postId}`, {
      headers: { Authorization: localStorage.getItem("accessToken") },
    });

    return data.data;
  });

  const updatePostMutation = useMutation(
    () => updatePost(postId, { title, content, url }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("post");
        navigate("/main");
      },
    }
  );

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
      setUrl(data.url);
    }
  }, [data]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  // 각 필드의 유효성 검사 함수
  const validateTitleField = (title) => {
    return !title ? "제목을 입력하세요." : "";
  };

  const validateUrlField = (url) => {
    return !url.match(/^https:\/\/www\.youtube\.com/)
      ? "유효한 유튜브 주소가 아닙니다."
      : "";
  };

  const validateContentField = (content) => {
    return validateContent(content);
  };

  return (
    <div className="container mx-auto p-5">
      <Header />
      <div className="flex flex-col space-y-4 mx-auto max-w-md mt-5">
        <div>
          <span className="font-bold select-none">제목</span>
          <input
            className={`w-full h-10 bg-gray-100 rounded-md ${
              validationErrors.title ? "border-red-500" : ""
            }`}
            type="text"
            defaultValue={data.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {validationErrors.title && (
            <p className="text-red-500 text-sm">{validationErrors.title}</p>
          )}
        </div>

        <div>
          <span className="font-bold select-none">유튜브 주소</span>
          <input
            className={`w-full h-10 bg-gray-100 rounded-md ${
              validationErrors.url ? "border-red-500" : ""
            }`}
            type="text"
            defaultValue={data.url}
            onChange={(e) => setUrl(e.target.value)}
          />
          {validationErrors.url && (
            <p className="text-red-500 text-sm">{validationErrors.url}</p>
          )}
        </div>

        <div>
          <span className="font-bold select-none">추천사유</span>
          <input
            className={`w-full h-10 bg-gray-100 rounded-md ${
              validationErrors.content ? "border-red-500" : ""
            }`}
            type="text"
            defaultValue={data.content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="왜 이 노래를 추천하시나요?"
          />
          {validationErrors.content && (
            <p className="text-red-500 text-sm">{validationErrors.content}</p>
          )}
        </div>

        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto my-2 select-none flex"
          onClick={() => {
            // 각 필드의 유효성 검사를 통과하면 등록
            const titleError = validateTitleField(title);
            const urlError = validateUrlField(url);
            const contentError = validateContentField(content);

            setValidationErrors({
              title: titleError,
              url: urlError,
              content: contentError,
            });

            if (!titleError && !urlError && !contentError) {
              updatePostMutation.mutate();
            }
          }}
        >
          수정
        </button>
      </div>
    </div>
  );
}
