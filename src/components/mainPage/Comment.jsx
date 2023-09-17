import { DeleteIcon, UpdateIcon } from "../../asset/icon/Icon";
import Button from "../common/Button";
import * as St from "../../styles/Styles";
import styled from "styled-components";

export default function Comment({ nickname, createdAt, content }) {
  return (
    <Container>
      <St.Row>
        <St.Row>
          <div>{nickname}</div>
          <div>{createdAt}</div>
        </St.Row>
        <div>
          <Button>
            <UpdateIcon />
          </Button>
          <Button>
            <DeleteIcon />
          </Button>
        </div>
      </St.Row>
      <div>{content}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 20px 30px;
`;
