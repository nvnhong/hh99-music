import * as St from "../styles/Styles";
import Header from "../components/common/Header";
import Card from "../components/mainPage/Card";
import Modal from "../components/common/Modal";
import PostViewModal from "../components/mainPage/PostViewModal";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/slice/modalSlice";
import Category from "../components/mainPage/Category";

export default function MainPage() {
  const data = [
    { id: 1, title: "Video provides a powerful" },
    { id: 2, title: "Video provides a powerful" },
    { id: 3, title: "Video provides a powerful" },
    { id: 4, title: "Video provides a powerful" },
    { id: 5, title: "Video provides a powerful" },
    { id: 6, title: "Video provides a powerful" },
  ];

  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleOpenModal = (modalName) => {
    dispatch(openModal(modalName));
  };

  const handleCloseModal = (modalName) => {
    dispatch(closeModal(modalName));
  };

  return (
    <St.Container>
      <Header />

      <St.CategoryGroup>
        <Category />
        <button onClick={() => handleOpenModal("uploadModal")}>글등록</button>
      </St.CategoryGroup>

      <St.CardGroup>
        {data.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            handleClick={() => handleOpenModal("postViewModal")}
          />
        ))}
      </St.CardGroup>

      {modal.uploadModal && (
        <Modal
          type="upload"
          handleClick={() => handleCloseModal("uploadModal")}
        />
      )}
      {modal.postViewModal && (
        <PostViewModal handleClick={() => handleCloseModal("postViewModal")} />
      )}
    </St.Container>
  );
}
