import styled from "styled-components";
import * as St from "../../styles/Styles";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { userId } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <St.Header>
      <Logo />
      {userId ? (
        <UserTitle onClick={() => navigate("/mypage")}>{userId}님</UserTitle>
      ) : (
        <Button onClick={() => navigate("/login")}>로그인</Button>
      )}
    </St.Header>
  );
}

const UserTitle = styled.span`
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  padding: 10px;

  &:hover {
    background-color: #ddd;
  }
`;

const Button = styled.button`
  background-color: #2d3648;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
