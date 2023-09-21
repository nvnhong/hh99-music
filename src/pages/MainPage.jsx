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

export default function MainPage() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery("post", getPost);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

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
        {data.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            handleClick={() => navigate("/post", { state: value.id })}
          />
        ))}
      </St.CardGroup>

      {modal.uploadModal && (
        <Modal handleClick={() => dispatch(closeModal("uploadModal"))} />
      )}
    </St.Container>
  );
}
