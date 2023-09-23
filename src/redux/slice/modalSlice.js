import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploadModal: false,
  deleteUserModal: false,
};

export const modalSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state[action.payload] = true;
    },

    closeModal: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
