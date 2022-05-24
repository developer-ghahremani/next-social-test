import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Settings {
  theme: {
    darkMode: boolean;
    color: string;
    // | "theme1"
    // | "theme2"
    // | "theme3"
    // | "theme4"
    // | "theme5"
    // | "theme6"
    // | "theme7"
    // | "theme8";
  };
}

const initialState: Settings = { theme: { darkMode: false, color: "#E91E63" } };

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDarkMode: (settings) => {
      return {
        ...settings,
        theme: { ...settings.theme, darkMode: !settings.theme.darkMode },
      };
    },
    changeTheme: (settings, { payload }: PayloadAction<string>) => {
      return { ...settings, theme: { ...settings.theme, color: payload } };
    },
  },
});

export default settings;
export const { toggleDarkMode, changeTheme } = settings.actions;
