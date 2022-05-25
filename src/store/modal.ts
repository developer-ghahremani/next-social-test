import { createSlice } from "@reduxjs/toolkit";

interface ModalInterface {
  themeModal: boolean;
  loadingModal: boolean;
}

const initialState: ModalInterface = { themeModal: false, loadingModal: false };

const modal = createSlice({
  initialState,
  name: "modal",
  reducers: {
    toggleThemeModal: (modal) => {
      return { ...modal, themeModal: !modal.themeModal };
    },
    toggleLoadingModal: (modal) => {
      return { ...modal, loadingModal: !modal.loadingModal };
    },
  },
});

export default modal;
export const { toggleThemeModal, toggleLoadingModal } = modal.actions;
