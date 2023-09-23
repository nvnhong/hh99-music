import styled from "styled-components";
import * as St from "../../styles/Styles";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { userId } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <header className="bg-gray-100 w-full h-14 flex justify-between items-center box-border px-4">
      <Logo />
      {userId ? (
        <UserTitle onClick={() => navigate("/mypage")}>{userId}님</UserTitle>
      ) : (
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 select-none"
          onClick={() => navigate("/login")}
        >
          {userId ? `${userId}님` : "로그인"}
        </button>
      )}
    </header>
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

const BeforeHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  box-sizing: border-box;
  padding: 10px 20px;
`;
