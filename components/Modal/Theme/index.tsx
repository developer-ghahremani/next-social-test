import { useAppDispatch, useAppSelector } from "../../../store";

import { IModal } from "../../general";
import Modal from "@mui/material/Modal";
import React from "react";
import { changeTheme } from "../../../store/settings";
import range from "lodash/range";
import { toggleThemeModal } from "../../../store/modal";
import { useI18Next } from "../../../i18n";

const ThemeModal = () => {
  const { t } = useI18Next();
  const dispatch = useAppDispatch();
  const { themeModal } = useAppSelector((s) => s.modal);

  const handleChangeTheme = (theme: string) => {
    dispatch(changeTheme(theme));
  };

  const hadleClose = () => {
    dispatch(toggleThemeModal());
  };

  return (
    <IModal open={themeModal} onClose={hadleClose}>
      <div>
        <p>{t("general.selectTheme")}</p>
        <div className="flex justify-center my-4">
          {[
            "#E91E63",
            "#C21858",
            "#9C2780",
            "#572780",
            "#272A80",
            "#276880",
            "#57ACDC",
            "#60C689",
          ].map((item, index) => (
            <div
              key={item}
              onClick={() => handleChangeTheme(item)}
              style={{
                backgroundColor: item,
                animationDelay: `${index / 9}s`,
                // transitionDelay
              }}
              className={`w-8 h-8 rounded-full cursor-pointer border border-white mx-1 animate__animated animate__fadeInUp`}></div>
          ))}
        </div>
      </div>
    </IModal>
  );
  return (
    <IModal open={themeModal} onClose={hadleClose}>
      <div>
        <p>{t("general.selectTheme")}</p>
        <div className="flex">
          {range(1, 9).map((item) => (
            <div
              key={item}
              onClick={() => handleChangeTheme(`theme-${item}`)}
              className={`w-8 h-8 rounded-full cursor-pointer border border-white bg-theme-${item}}`}>
              <p className={`text-t-${item}`}>text</p>
            </div>
          ))}
        </div>
      </div>
    </IModal>
  );
};

export default ThemeModal;
