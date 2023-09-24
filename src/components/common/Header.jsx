import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { userId } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <header className="bg-gray-100 w-full h-14 flex justify-between items-center px-4">
      <Logo />
      {userId ? (
        <span
          onClick={() => navigate("/mypage")}
          className="cursor-pointer rounded-lg font-semibold p-2 hover:bg-red-300 select-none"
        >
          {userId}님
        </span>
      ) : (
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 select-none"
          onClick={() => navigate("/")}
        >
          {userId ? `${userId} 님` : "로그인"}
        </button>
      )}
    </header>
  );
}
