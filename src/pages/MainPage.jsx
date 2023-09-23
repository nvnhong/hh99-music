import * as St from "../styles/Styles";
import Header from "../components/common/Header";
import Card from "../components/mainPage/Card";
import Modal from "../components/common/Modal";
import Category from "../components/mainPage/Category";
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

      <St.CategoryGroup>
        <Category />
        <button onClick={() => dispatch(openModal("uploadModal"))}>
          글등록
        </button>
      </St.CategoryGroup>

      <St.CardGroup>
        {data.data.content.map((value) => (
          <Card
            key={value.id}
            title={value.title}
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
