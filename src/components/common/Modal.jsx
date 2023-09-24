import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { CloseIcon } from "../../asset/icon/Icon";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { createPost } from "../../api/api";
import { validateContent } from "../../util/validation"; // validation 함수 불러오기

export default function Modal({ handleClick }) {
  const [title, titleHandleChange] = useInput("");
  const [content, contentHandleChange] = useInput("");
  const [url, urlHandleChange] = useInput("");
  const { userId } = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const createPostMutation = useMutation(
    () => createPost({ title, content, url, author: userId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("post");
        handleClick();
      },
    }
  );

  const handleModalClick = (e) => {
    // 모달 바깥을 클릭한 경우에만 모달 닫기
    if (e.target === e.currentTarget) {
      handleClick();
    }
  };

  // validation 결과를 저장할 상태 변수
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    url: "",
    content: "",
  });

  const handleValidation = () => {
    // 각 필드에 대한 validation 체크
    const titleError = !title ? "제목을 입력하세요." : "";
    const urlError = !url.match(/^https:\/\/www\.youtube\.com/)
      ? "유효한 유튜브 주소가 아닙니다."
      : "";
    const contentError = validateContent(content);

    // validation 결과를 상태 변수에 저장
    setValidationErrors({
      title: titleError,
      url: urlError,
      content: contentError,
    });

    // validation 통과 여부 확인
    return !(titleError || urlError || contentError);
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleModalClick}
      >
        <div className="w-96 bg-white rounded-lg p-4">
          <div className="flex justify-end">
            <button
              onClick={handleClick}
              className="text-gray-600 hover:text-gray-800"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mt-4">
            <label className="block font-bold mb-2">제목</label>
            <input
              type="text"
              onChange={titleHandleChange}
              className={`w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none ${
                validationErrors.title ? "border-red-500" : ""
              }`}
            />
            {validationErrors.title && (
              <p className="text-red-500 text-sm">{validationErrors.title}</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block font-bold mb-2">유튜브 주소</label>
            <input
              type="text"
              onChange={urlHandleChange}
              placeholder="공유하고 싶은 유튜브 주소를 적어주세요."
              className={`w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none ${
                validationErrors.url ? "border-red-500" : ""
              }`}
            />
            {validationErrors.url && (
              <p className="text-red-500 text-sm">{validationErrors.url}</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block font-bold mb-2">추천사유</label>
            <input
              type="text"
              onChange={contentHandleChange}
              placeholder="왜 이 노래를 추천하시나요?"
              className={`w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none ${
                validationErrors.content ? "border-red-500" : ""
              }`}
            />
            {validationErrors.content && (
              <p className="text-red-500 text-sm">{validationErrors.content}</p>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 focus:outline-none text-white text-sm select-none"
              onClick={() => {
                // validation 체크 후 통과하면 등록
                if (handleValidation()) {
                  createPostMutation.mutate();
                }
              }}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
