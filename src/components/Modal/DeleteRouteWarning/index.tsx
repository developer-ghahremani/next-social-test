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
  const { theme } = useAppSelector((s) => s.settings);
  const { t } = useI18Next();

  const onChangeVerifyText = (text: string) => {
    setVerifyText(text);
  };

  return (
    <IModal {...props}>
      <div className="flex flex-col items-center">
        <p>
          {t("general.warningDeleteRoute", { type: props.socialRoute.type })}
        </p>
        <p>{t("general.typeTheSocialNetwork")}</p>
        <strong>{props.socialRoute.type}</strong>
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
              color: theme.color,
            }}
            className={`border mx-2 `}
            onClick={props.onClose}>
            {t("general.cancel")}
          </IButton>
          <IButton
            onClick={props.onDelete}
            style={{
              backgroundColor:
                verifyText === props.socialRoute.type ? theme.color : "inherit",
            }}
            disabled={verifyText !== props.socialRoute.type}
            className={`border mx-2 ${
              verifyText === props.socialRoute.type
                ? "text-white font-bold"
                : "text-inherit"
            }`}>
            {t("general.delete")}
          </IButton>
        </div>
      </div>
    </IModal>
  );
};

export default DeleteRouteWarningModal;
