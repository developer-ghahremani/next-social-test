import { IButton, IInput, IModal } from "components/general";
import React, { useState } from "react";

import SocialRoute from "models/SocialRoute.model";
import { useAppSelector } from "store";
import { useI18Next } from "i18n";

interface Props {
  open: boolean;
  onClose: () => void;
  socialRoute: SocialRoute;
  onDelete: () => void;
}

const DeleteRouteWarningModal = (props: Props) => {
  const [verifyText, setVerifyText] = useState<string>("");
  const { t } = useI18Next();
  const { theme } = useAppSelector((s) => s.settings);

  const onChangeVerifyText = (text: string) => {
    setVerifyText(text);
  };

  return (
    <IModal {...props}>
      <div className="flex flex-col items-center">
        <p>
          {t("general.warningDeleteRoute", { type: props.socialRoute.type })}
        </p>
        <IInput
          value={verifyText}
          className="w-full !mt-4 "
          onChange={(ev) => {
            onChangeVerifyText(ev.target.value);
          }}
        />
        <div className="flex mt-4">
          <IButton
            style={{
              borderColor: theme.color,
            }}
            className={`border mx-2 `}
            onClick={props.onClose}>
            {t("general.cancel")}
          </IButton>
          <IButton
            onClick={props.onDelete}
            style={{
              backgroundColor:
                verifyText === "success" ? theme.color : "inherit",
            }}
            disabled={verifyText !== "success"}
            className={`border mx-2 ${
              verifyText === "success" ? "text-white font-bold" : "text-inherit"
            }`}>
            {t("general.delete")}
          </IButton>
        </div>
      </div>
    </IModal>
  );
};

export default DeleteRouteWarningModal;
