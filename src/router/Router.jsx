import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinPage from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import UserInfo from "../components/myPage/UserInfo";
import UserPost from "../components/myPage/UserPost";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/userinfo" element={<UserInfo />} />
        <Route path="/mypage/userpost" element={<UserPost />} />
      </Routes>
    </BrowserRouter>
  );
}
