import { createSlice } from "@reduxjs/toolkit";
// 리액트의 useState와 리덕스가 비슷함
// const [value, setValue] = useState('');
// 리액트의 value = 리덕스의 initialState
// 리액트의 setValue와 리덕스의 userSlice

// 초기값 설정 : user의 id (username)
// 로그인이 성공하면 username을 저장
// 로그인이 안된 상태라면 null
const initialState = {
  userId: null,
};


// 리덕스 툴킷의 리듀서 규칙
// 1. 리듀서의 name 지정
// 2. 초기값이 있어야 하고
// 3. 초기값을 변경시키는 함수
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // userId에 username을 할당하는 코드(로그인)
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    // userId에 null을 할당하는 코드(로그아웃)
    clearUserId: (state) => {
      state.userId = null;
    },
  },
});

export const { setUserId, clearUserId } = userSlice.actions;
export default userSlice.reducer;
