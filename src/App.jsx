import { useEffect } from "react";
import Router from "./router/Router";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "./api/api";
import { setUserId } from "./redux/slice/userSlice";

function App() {
  // 최상위에서 accessToken이 있는데 dispatch의 userId가 null이라면? 다시 userid를 세팅한다.
  const { userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyUser = async () => {
      if (userId === null && localStorage.getItem("accessToken")) {
        const username = await getUserName(localStorage.getItem("accessToken"));
        dispatch(setUserId(username));
      }
    };

    verifyUser();
  }, [userId]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
