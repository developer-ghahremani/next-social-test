import React, { useEffect, useReducer, useState } from "react";
import {
  settingInitialState,
  settingReducer,
} from "../../reducers/settingsReducer";

import AddRoute from "components/AddRoute";
import ILoading from "components/ILoading";
import { MainLayout } from "components/layout";
import SocialRoutes from "components/SocialRoutes";
import { getSocialRoute } from "api/socialRout";
import { useI18Next } from "i18n";

const Settings = () => {
  const [state, dispatch] = useReducer(settingReducer, settingInitialState);

  const { t } = useI18Next();

  useEffect(() => {
    handleGetSocialNetworks();
  }, []);

  const handleGetSocialNetworks = async () => {
    try {
      const { data } = await getSocialRoute();
      dispatch({ type: "setSocialRoutes", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <p className="text-xl font-bold">{t("general.userSettings")}</p>
      <AddRoute />
      {state.loading ? (
        <ILoading />
      ) : (
        <SocialRoutes socialRoutes={state.socialRoutes} />
      )}
    </MainLayout>
  );
};

export default Settings;
