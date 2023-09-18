import styled from "styled-components";
import useInput from "../../hooks/useInput";
import * as St from "../../styles/Styles";
import { CloseIcon } from "../../asset/icon/Icon";

export default function Modal({ type, handleClick }) {
  const [titleInput, titleHandleChange] = useInput("");
  const [youtubeidInput, youtubeidHandleChange] = useInput("");
  const [contentInput, contentHandleChange] = useInput("");

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
          <input type="text" value={titleInput} onChange={titleHandleChange} />
        </Col>

        <Col>
          <span>유튜브 주소</span>
          <div>
            https://youtube.be/
            <input
              type="text"
              value={youtubeidInput}
              onChange={youtubeidHandleChange}
            />
          </div>
        </Col>

        <Col>
          <span>추천사유</span>
          <input
            type="text"
            value={contentInput}
            onChange={contentHandleChange}
            placeholder="왜 이 노래를 추천하시나요?"
          />
        </Col>

        <ButtonContainer>
          {type === "upload" && <Button>등록</Button>}
          {type === "update" && <Button>수정</Button>}
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
