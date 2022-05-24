import { useAppDispatch, useAppSelector } from "store";

import Navbar from "./Navbar";
import React from "react";
import { SettingIcon } from "components/icons";
import { getCurrentLanguage } from "i18n";
import { toggleThemeModal } from "store/modal";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  const { theme } = useAppSelector((s) => s.settings);
  const currentLang = getCurrentLanguage();
  const dispatch = useAppDispatch();
  const handleTggleThemeModal = () => {
    dispatch(toggleThemeModal());
  };

  return (
    <div
      style={{ direction: currentLang === "fa" ? "rtl" : "ltr" }}
      className={`min-h-screen font-vazir 
      ${theme.darkMode ? `bg-dark text-white` : "bg-white text-dark"}
      `}>
      <Navbar />

      <div className="relative h-[calc(90vh-4rem)]">
        <div className="absolute w-full h-[calc(90vh-4rem)]">
          <div
            onClick={handleTggleThemeModal}
            style={{ backgroundColor: theme.color }}
            className={`${
              currentLang === "fa" ? "left-0" : "right-0"
            } top-[50%] absolute ${
              currentLang === "fa" ? "rounded-r-2xl" : "rounded-l-2xl"
            } ${
              currentLang === "fa" ? "pl-2 hover:pl-10 " : "pr-2 hover:pr-10"
            } cursor-pointer duration-700`}>
            <SettingIcon color="white" className="m-2" fontSize={22} />
          </div>
        </div>
        <div className="lg:mx-auto lg:max-w-3xl bg-theme-2 h-full mx-8">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
