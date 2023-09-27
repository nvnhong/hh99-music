import * as St from "../../styles/Styles";
import { UpdateIcon, DeleteIcon } from "../../asset/icon/Icon";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function List({ id, title, handleClick, deletePostMutation }) {
  const navigate = useNavigate();

  return (
    <St.UserPostForm>
      <div className="flex-1" onClick={handleClick}>
        {title}
      </div>
      <div className="flex gap-3.5">
        <button
          className="p-1 rounded hover:bg-blue-100"
          onClick={() => navigate("/post/update", { state: id })}
        >
          <UpdateIcon />
        </button>
        <button
          className="p-1 rounded hover:bg-blue-100"
          onClick={() => deletePostMutation.mutate(id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </St.UserPostForm>
  );
}
