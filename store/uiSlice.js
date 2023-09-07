import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    openModal: false,
    modalType: null,
  },

  reducers: {
    openCartHandler(currentState, action) {
      const type = action.payload;
      currentState.openModal = true;
      currentState.modalType = type;
    },
    closeCartHandler(currentState) {
      currentState.openModal = false;
    },
  },
});

export const uiSliceAction = uiSlice.actions;

export default uiSlice;
