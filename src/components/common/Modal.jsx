import styled from "styled-components";
import useInput from "../../hooks/useInput";
import * as St from "../../styles/Styles";
import { CloseIcon } from "../../asset/icon/Icon";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { createPost } from "../../api/api";

export default function Modal({ handleClick }) {
  const [title, titleHandleChange] = useInput("");
  const [content, contentHandleChange] = useInput("");
  const [url, urlHandleChange] = useInput("");
  const { userId } = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const createPostMutation = useMutation(
    () => createPost({ title, content, url, author: userId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("post");
        handleClick();
      },
    }
  );

  return (
    <>
      <St.Background onClick={handleClick} />
      <Container>
        <Header>
          <button onClick={handleClick}>
            <CloseIcon />
          </button>
        </Header>

        <Col>
          <span>제목</span>
          <input type="text" onChange={titleHandleChange} />
        </Col>

        <Col>
          <span>유튜브 주소</span>
          <input
            type="text"
            onChange={urlHandleChange}
            placeholder="공유하고 싶은 유튜브 주소를 적어주세요."
          />
        </Col>

        <Col>
          <span>추천사유</span>
          <input
            type="text"
            onChange={contentHandleChange}
            placeholder="왜 이 노래를 추천하시나요?"
          />
        </Col>

        <ButtonContainer>
          <Button onClick={() => createPostMutation.mutate()}>등록</Button>
        </ButtonContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: -10%;
  left: 50%;
  width: 600px;
  transform: translate(-50%, 50%);
  background-color: white;
  border-radius: 10px;
  padding: 0 10px;
  padding-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;

  button {
    border: none;
    height: 30px;
    background-color: transparent;
  }

  button:hover {
    background-color: #eee;
    border-radius: 4px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;

  span {
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    background-color: #eee;
    height: 30px;
    border: none;
    border-radius: 4px;
  }
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #2d3648;
  border: none;
  border-radius: 8px;
  color: white;
`;
