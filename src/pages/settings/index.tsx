import React, { useState } from "react";

import AddRoute from "components/AddRoute";
import { MainLayout } from "components/layout";
import SocialRoute from "models/SocialRoute.model";
import SocialRoutes from "components/SocialRoutes";
import { getSocialRoute } from "api/socialRout";
import { useI18Next } from "i18n";

type Props = { socialRoutes: SocialRoute[] };
const Settings = ({ socialRoutes = [], ...props }: Props) => {
  const { t } = useI18Next();
  console.log(props);

  return (
    <MainLayout>
      <p className="text-xl font-bold">{t("general.userSettings")}</p>
      <AddRoute />
      <SocialRoutes socialRoutes={socialRoutes} />
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
      props: { error: "erorr occured" },
    };
  }
};

export default Settings;
