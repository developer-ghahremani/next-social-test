import React, { useState } from "react";

import AddOrEditRoute from "components/AddOrEditRoute";
import AddRoute from "components/AddRoute";
import { Collapse } from "@mui/material";
import { MainLayout } from "components/layout";
import { PlusIcon } from "components/icons";
import SocialRoute from "models/SocialRoute.model";
import SocialRoutes from "components/SocialRoutes";
import { getSocialRoute } from "api/socialRout";
import { useAppSelector } from "store";
import { useI18Next } from "i18n";

type Props = { socialRoutes: SocialRoute[] };
const Settings = (props: Props) => {
  const { t } = useI18Next();

  return (
    <MainLayout>
      <p className="text-xl font-bold">{t("general.userSettings")}</p>
      <AddRoute />
      <SocialRoutes socialRoutes={props.socialRoutes} />
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data } = await getSocialRoute();
    return {
      props: { socialRoutes: data },
    };
  } catch (error) {
    return {
      props: { error: "error occured" },
    };
  }
};

export default Settings;
