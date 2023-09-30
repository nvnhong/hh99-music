import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../redux/slice/modalSlice";

export default function useModal() {
  const dispatch = useDispatch();

  const handleOpenModal = (type) => {
    dispatch(openModal(type));
  };

  const handleCloseModal = (type) => {
    dispatch(closeModal(type));
  };

  return { handleOpenModal, handleCloseModal };
}
