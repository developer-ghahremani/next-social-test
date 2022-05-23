import { createSlice } from "@reduxjs/toolkit";

interface ModalInterface {
  themeModal: boolean;
}

const initialState: ModalInterface = { themeModal: false };

const modal = createSlice({
  initialState,
  name: "modal",
  reducers: {
    toggleThemeModal: (modal) => {
      return { ...modal, themeModal: !modal.themeModal };
    },
  },
});

export default modal;
export const { toggleThemeModal } = modal.actions;
