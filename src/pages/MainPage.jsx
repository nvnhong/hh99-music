import * as St from "../styles/Styles";
import Header from "../components/common/Header";
import Card from "../components/mainPage/Card";
import { useState } from "react";
import Modal from "../components/common/Modal";
import PostViewModal from "../components/mainPage/PostViewModal";

export default function MainPage() {
  // useEffect : token이 있다면 프로필, 없다면 로그인 버튼
  const data = [
    { id: 1, title: "Video provides a powerful" },
    { id: 2, title: "Video provides a powerful" },
    { id: 3, title: "Video provides a powerful" },
    { id: 4, title: "Video provides a powerful" },
    { id: 5, title: "Video provides a powerful" },
    { id: 6, title: "Video provides a powerful" },
  ];

  const [modal, setModal] = useState(false);
  const [postModal, setPostModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const postOpenModal = () => {
    setPostModal(true);
  };

  const postCloseModal = () => {
    setPostModal(false);
  };

  return (
    <St.Container>
      <Header>
        <button>프로필</button>
      </Header>

      <St.CategoryGroup>
        <div>
          <button>최신순</button>
          <button>조회순</button>
          <button>댓글순</button>
        </div>

        <div>
          <button onClick={openModal}>글등록</button>
        </div>
      </St.CategoryGroup>

      <St.CardGroup>
        {data.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            handleClick={postOpenModal}
          />
        ))}
        <Card />
      </St.CardGroup>

      {modal && <Modal handleClick={closeModal} />}
      {postModal && <PostViewModal handleClick={postCloseModal} />}
    </St.Container>
  );
}
