import SocialRoute from "models/SocialRoute.model";
import React, { useState } from "react";
import { useI18Next } from "i18n";
import { useAppSelector } from "store";
import { BinIcon, EditIcon } from "components/icons";

import AddOrEditRoute from "components/AddOrEditRoute";
import { Collapsable } from "components/general";
import DeleteRouteWarningModal from "components/Modal/DeleteRouteWarning";
import { deleteSocialRoute } from "api/socialRout";
import { useRouter } from "next/router";

type Props = { socialRoute: SocialRoute };
const SocialRoute = (props: Props) => {
  const { reload } = useRouter();
  const [collapse, setCollapse] = useState<boolean>(false);
  const [warningModal, setWarningModal] = useState<boolean>(false);
  const { t } = useI18Next();
  const { theme } = useAppSelector((s) => s.settings);

  const toggleEdit = () => {
    setCollapse((s) => !s);
  };

  const toggleWarningModal = () => {
    setWarningModal((s) => !s);
  };

  const handleDeleteRoute = async () => {
    console.log("residam");

    try {
      await deleteSocialRoute({ id: props.socialRoute.id });
      reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-xl p-4 mt-2 border">
      {/* ------------------------ HEDER ----------------------- */}
      <div className=" flex items-center justify-between">
        <div className="md:flex-row flex flex-col items-center text-sm">
          <p>{props.socialRoute.type}</p>

          <p className="md:block hidden mx-2">{t("general.link")}:</p>
          <p style={{ color: theme.color }} className="text-xs font-bold">
            {props.socialRoute.link}
          </p>
        </div>
        <div className="flex items-center text-sm">
          <div
            onClick={toggleEdit}
            className="flex items-center mx-1 cursor-pointer"
            style={{ color: theme.color }}>
            <EditIcon className="mx-2" />
            <p>{t("general.edit")}</p>
          </div>
          <div
            onClick={toggleWarningModal}
            className=" flex items-center cursor-pointer"
            style={{ color: "red" }}>
            <BinIcon className="mx-1" />
            <p>{t("general.delete")}</p>
          </div>
        </div>
      </div>
      {/* ------------------------ HEDER ----------------------- */}
      <Collapsable in={collapse}>
        <AddOrEditRoute
          initialValues={{
            link: props.socialRoute.link,
            type: props.socialRoute.type,
          }}
          onCancel={toggleEdit}
          id={props.socialRoute.id}
        />
      </Collapsable>
      <DeleteRouteWarningModal
        onDelete={handleDeleteRoute}
        open={warningModal}
        onClose={toggleWarningModal}
        socialRoute={props.socialRoute}
      />
    </div>
  );
};

export default SocialRoute;
