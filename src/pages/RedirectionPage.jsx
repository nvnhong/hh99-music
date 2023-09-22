import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserId } from "../redux/slice/userSlice";
import { getUserName, kakaoLogin } from "../api/api";

export default function RedirectionPage() {
  const code = window.location.search.split("code=")[1];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const socialLogin = async () => {
      try {
        // 카카오 서버로부터 받은 인가 코드를 백엔드에게 전달하고 받은 데이터
        const response = await kakaoLogin(code);
        // 토큰을 accessToken 변수에 저장
        const accessToken = response.headers.authorization;
        // 토큰을 이용해 백엔드 서버로부터 user 정보 전달 받기
        const userName = await getUserName(accessToken);

        // accessToken을 로컬스토리지에 저장
        localStorage.setItem("accessToken", accessToken);
        // user 정보를 전역상태에 저장
        dispatch(setUserId(userName));
        // 메인 페이지로 이동
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };

    socialLogin();
  }, []);

  return <div>로그인 중입니다.</div>;
}
