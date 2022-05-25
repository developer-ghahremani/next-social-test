import React, { useState } from "react";

import AddOrEditRoute from "components/AddOrEditRoute";
import { Collapsable } from "components/general";
import { PlusIcon } from "components/icons";
import { useAppSelector } from "store";
import { useI18Next } from "i18n";

const AddRoute = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const { theme } = useAppSelector((s) => s.settings);
  const { t } = useI18Next();

  const toggleExpand = () => {
    setExpand((s) => !s);
  };

  return (
    <div className="p-8 mt-6 shadow-xl">
      <div
        className={`flex items-center cursor-pointer`}
        onClick={toggleExpand}>
        <PlusIcon
          fontSize={14}
          style={{ color: expand ? "#707070" : theme.color }}
        />
        <p
          style={{ color: expand ? "#707070" : theme.color }}
          className="mx-2 text-sm font-bold">
          {t("general.communicationRoutes")}
        </p>
      </div>

      <Collapsable in={expand} className={`p-2 ${expand ? "mt-1" : "!m-0"}`}>
        <p className="text-sm">{t("general.communicationRoutes")}</p>
        <AddOrEditRoute
          initialValues={{ link: "", type: "" }}
          onCancel={toggleExpand}
        />
      </Collapsable>
    </div>
  );
};

export default AddRoute;
