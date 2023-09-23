import styled from "styled-components";
import * as St from "../../styles/Styles";
import { CloseIcon } from "../../asset/icon/Icon";
import { deleteUser } from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearUserId } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

export default function DeleteUserModal({ handleClick }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitClick = async () => {
    await deleteUser(password);
    dispatch(clearUserId());
    navigate("/");
  };

  return (
    <>
      <St.Background onClick={handleClick} />
      <Container>
        <Header>
          <button onClick={handleClick}>
            {/* padding */}
            <CloseIcon />
          </button>
        </Header>

        <Col>
          {/* text-align : center */}
          <div>회원탈퇴를 하시겠습니까? 비밀번호를 입력해주세요.</div>
          {/* padding */}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>

        <ButtonContainer>
          <Button onClick={handleSubmitClick}>등록</Button>
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
