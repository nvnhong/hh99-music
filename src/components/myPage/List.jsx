import * as St from "../../styles/Styles";
import { UpdateIcon, DeleteIcon } from "../../asset/icon/Icon";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { QueryClient, useMutation } from "react-query";
import { deletePost } from "../../api/api";

export default function List({ id, title, handleClick }) {
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const deletePostMutation = useMutation(() => deletePost(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
    },
  });

  return (
    <St.UserPostForm>
      <div className="flex-1" onClick={handleClick}>
        {title}
      </div>
      <ButtonGroup>
        <button onClick={() => navigate("/post/update", { state: id })}>
          {/* <button onClick={handleTestClick}> */}
          <UpdateIcon />
        </button>
        <button onClick={() => deletePostMutation.mutate()}>
          <DeleteIcon />
        </button>
      </ButtonGroup>
    </St.UserPostForm>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
