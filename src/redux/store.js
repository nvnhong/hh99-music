import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slice/modalSlice";

export const store = configureStore({ reducer: { modal: modalReducer } });
