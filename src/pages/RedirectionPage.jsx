import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserId } from "../redux/slice/userSlice";
import { getUserName, kakaoLogin } from "../api/api";

export default function RedirectionPage() {
  const code = window.location.search.split("code=")[1];
  console.log(`Redirection ${code}`);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const socialLogin = async () => {
      try {
        // 서버에서 인가 코드의 중복 사용 여부를 확인하는 요청을 보내는 함수
        const isCodeUsed = await checkIfCodeUsed(code);

        // isCodeUsed가 true이면 이미 사용된 코드라고 가정
        if (isCodeUsed) {
          console.error("이미 사용된 인가 코드입니다.");
          return;
        }

        // 사용되지 않은 코드인 경우, 카카오 서버로부터 받은 인가 코드를 백엔드에게 전달하고 받은 데이터
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
        navigate("/main");
      } catch (error) {
        console.error(error);
      }
    };

    socialLogin();
  }, []);

  // 서버에서 중복 사용 여부를 확인하는 함수
  const checkIfCodeUsed = async (code) => {
    try {
      // 서버에 요청을 보내서 해당 인가 코드가 이미 사용되었는지 확인
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}checkCodeUsage`,
        { code }
      );

      // 사용되었으면 true를 반환, 아니면 false 반환
      return response.data.used;
    } catch (error) {
      console.error(error);
      // 에러 처리: 중복 사용 여부를 알 수 없는 경우에 대한 예외처리
      return false;
    }
  };

  return <div>로그인 중입니다.</div>;
}
