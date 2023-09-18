import * as St from "../../styles/Styles";
import { UpdateIcon, DeleteIcon } from "../../asset/icon/Icon";
import styled from "styled-components";

export default function List({ title }) {
  return (
    <St.UserPostForm>
      <div>{title}</div>
      <ButtonGroup>
        <button>
          <UpdateIcon />
        </button>
        <button>
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
