import * as St from "../styles/Styles";
import Header from "../components/common/Header";
import Card from "../components/mainPage/Card";
import Modal from "../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/slice/modalSlice";
import { getPost } from "../api/api";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "../components/mainPage/Pagination";
import { axiosInstance } from "../api/axiosInstance";

export default function MainPage() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // >> [페이지네이션] >>
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage, setPostPerPage] = useState(6); // 페이지별 나타낼 게시글 갯수

  const { isLoading, error, data } = useQuery(
    ["post", currentPage],
    async () => {
      const { data } = await axiosInstance.get(
        `post?page=${currentPage - 1}&size=${postsPerPage}`
      );

      const post = await getPost();

      return { data, post };
    }
  );

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  // == [페이지네이션] ==

  return (
    <St.Container>
      <Header />

      <div className="flex justify-end mt-2 mb-2">
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 select-none"
          onClick={() => dispatch(openModal("uploadModal"))}
        >
          글등록
        </button>
      </div>

      <St.CardGroup>
        {data.data.content.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            videoUrl={value.url}
            handleClick={() => navigate("/post", { state: value.id })}
          />
        ))}
      </St.CardGroup>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.post.length}
        currentPage={currentPage}
        paginate={setCurrentPage}
      />

      {modal.uploadModal && (
        <Modal handleClick={() => dispatch(closeModal("uploadModal"))} />
      )}
    </St.Container>
  );
}
