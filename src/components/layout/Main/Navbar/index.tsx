import { MoonIcon, SunIcon } from "components/icons";
import i18n, { getCurrentLanguage, useI18Next } from "i18n";
import { useAppDispatch, useAppSelector } from "store";

import Link from "next/link";
import { Navlink } from "components/general";
import React from "react";
import { toggleDarkMode } from "store/settings";

const Navbar = () => {
  const { t } = useI18Next();
  const currentLanguage = getCurrentLanguage();
  const { theme } = useAppSelector((s) => s.settings);
  const dispatch = useAppDispatch();

  const handleChangeLanguage = (lang: "fa" | "en") => {
    i18n.changeLanguage(lang);
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="lg:mx-auto lg:max-w-4xl flex items-center justify-between pt-12 mx-8">
      <div className="flex">
        <Navlink title={t("general.home")} to="/" />
        <Navlink
          className="mx-4"
          title={t("general.userSettings")}
          to="/settings"
        />
      </div>
      <div className="flex items-center">
        <p
          onClick={() => handleChangeLanguage("en")}
          style={{ color: currentLanguage === "en" ? theme.color : "inherit" }}
          className={`cursor-pointer ${
            currentLanguage === "en" ? "font-bold" : ""
          } `}>
          {t("general.english")}
        </p>
        <p
          onClick={() => handleChangeLanguage("fa")}
          style={{ color: currentLanguage === "fa" ? theme.color : "inherit" }}
          className={`mx-4 cursor-pointer ${
            currentLanguage === "fa" ? "font-bold" : ""
          }`}>
          {t("general.farsi")}
        </p>
        <div onClick={handleToggleDarkMode} className="cursor-pointer">
          {theme.darkMode ? (
            <SunIcon
              style={{ color: theme.color }}
              className="animate__animated animate__heartBeat"
            />
          ) : (
            <MoonIcon
              style={{ color: theme.color }}
              className="animate__animated animate__heartBeat"
            />
          )}
        </div>
        {/* <p >
          {theme.darkMode ? "darkmode" : "lightmode"}
        </p> */}
      </div>
    </div>
  );
};

export default Navbar;
