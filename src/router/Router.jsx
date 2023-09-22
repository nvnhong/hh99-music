import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinPage from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import UserInfo from "../components/myPage/UserInfo";
import UserPost from "../components/myPage/UserPost";
import PostPage from "../pages/PostPage";
import UpdatePage from "../pages/UpdatePage";
import RedirectionPage from "../pages/RedirectionPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/update" element={<UpdatePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/userinfo" element={<UserInfo />} />
        <Route path="/mypage/userpost" element={<UserPost />} />
        <Route path="/api/user/kakao/callback" element={<RedirectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
