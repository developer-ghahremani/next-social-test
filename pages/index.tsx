import { MainLayout } from "../components/layout";
import React from "react";
import ThemeModal from "../components/Modal/Theme";
import { useI18Next } from "../i18n";

const Home = () => {
  const { t } = useI18Next();
  return (
    <MainLayout>
      <p>{t("general.hi")}</p>
      {/* <ThemeModal /> */}
    </MainLayout>
  );
};

export default Home;
