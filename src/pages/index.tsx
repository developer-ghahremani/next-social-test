import { Expandable } from "components/general";
import { MainLayout } from "components/layout";
import React from "react";
import { StarIcon } from "components/icons";
import { useAppSelector } from "store";
import { useI18Next } from "i18n";

const levels: {
  title: string;
  description: string[];
  accordingTitle: string;
}[] = [
  {
    // accordingTitle: t("general.level", { level: t("general.first") }),
    accordingTitle: "firstLevel",
    // title: t("home.firstLevelTitle"),
    title: "firstLevelTitle",
    description: [
      "firstLevelDesc1",
      "firstLevelDesc2",
      "firstLevelDesc3",
      "firstLevelDesc4",
      "firstLevelDesc5",
    ],
  },
  {
    // accordingTitle: t("general.level", { level: t("general.second") }),
    accordingTitle: "secondLevel",

    // title: t("home.secondLevelTitle"),
    title: "secondLevelTitle",
    description: [
      "secondLevelDesc1",
      "secondLevelDesc2",
      "secondLevelDesc3",
      "secondLevelDesc4",
    ],
  },
  {
    // accordingTitle: t("general.level", { level: t("general.third") }),

    accordingTitle: "thirdLevel",
    description: [
      "thirdLevelDesc1",
      "thirdLevelDesc2",
      "thirdLevelDesc3",
      "thirdLevelDesc4",
    ],
    // title: t("home.thirdLevelTitle"),
    title: "thirdLevelTitle",
  },
];
const Home = () => {
  const { t } = useI18Next();
  const { theme } = useAppSelector((s) => s.settings);

  return (
    <MainLayout>
      <p className="text-2xl">{t("home.hi")}.</p>
      <p className="text-sm">{t("home.hope")}</p>
      <p className="mt-6 text-2xl">{t("home.title")}:</p>
      <p className="text-lg">{t("home.projectSummary")}.</p>
      <p className="mt-6">{t("home.testLevels")}:</p>
      <p>{t("home.desc1")}:</p>
      <p className="mt-6 text-2xl">{t("home.testRequirment")}:</p>
      <p>{t("home.testLibrary")}:</p>
      <p className="mt-6 text-sm font-bold">{t("general.tip")}:</p>
      <p className="text-sm">{t("general.projectTip")}:</p>

      {[...levels].map((level, index) => (
        <Expandable
          // defaultExpanded={index === 0}
          key={level.title}
          className={`${index === 0 ? "mt-4" : ""}`}
          title={t(`home.${level.accordingTitle}`)}
          details={
            <>
              <p className="text-sm">{t(`home.${level.title}`)}:</p>
              {[...level.description].map((item) => (
                <div key={item} className="flex items-center mt-4">
                  <StarIcon fontSize={20} color={theme.color} />
                  <p className="flex-1 mx-2 text-sm">{t(`home.${item}`)}</p>
                </div>
              ))}
            </>
          }
        />
      ))}
    </MainLayout>
  );
};

export default Home;
