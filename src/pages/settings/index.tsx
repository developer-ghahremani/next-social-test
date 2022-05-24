import React, { useEffect, useState } from "react";

import AddRoute from "components/AddRoute";
import { MainLayout } from "components/layout";
import SocialRoute from "models/SocialRoute.model";
import SocialRoutes from "components/SocialRoutes";
import { getSocialRoute } from "api/socialRout";
import { useI18Next } from "i18n";

// type Props = { socialRoutes: SocialRoute[] };
const Settings = () => {
  // const Settings = ({ socialRoutes = [], ...props }: Props) => {
  const [socialRoutes, setSocialRoutes] = useState<SocialRoute[]>([]);
  const { t } = useI18Next();

  useEffect(() => {
    handleGetSocialNetworks();
  }, []);

  const handleGetSocialNetworks = async () => {
    try {
      const { data } = await getSocialRoute();
      setSocialRoutes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <p className="text-xl font-bold">{t("general.userSettings")}</p>
      <AddRoute />
      <SocialRoutes socialRoutes={socialRoutes} />
    </MainLayout>
  );
};

// export const getServerSideProps = async () => {
//   try {
//     const { data } = await getSocialRoute();
//     return {
//       props: { socialRoutes: data },
//     };
//   } catch (error) {
//     return {
//       props: { error: "erorr occured" },
//     };
//   }
// };

export default Settings;
