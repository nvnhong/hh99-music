import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slice/modalSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: { modal: modalReducer, user: userReducer },
});
