import { IButton, IInput, ISelect } from "components/general";
import { editSocialRoute, postSocialRoute } from "api/socialRout";

import { Formik } from "formik";
import React from "react";
import { useAppSelector } from "store";
import { useI18Next } from "i18n";
import { useRouter } from "next/router";

type Props = {
  onCancel: () => void;
  initialValues: { type: string; link: string };
  id?: number;
};

const AddOrEditRoute = (props: Props) => {
  const { theme } = useAppSelector((s) => s.settings);
  const { t } = useI18Next();
  const { reload } = useRouter();

  const handleFinish = (params: { link: string; type: string }) => {
    const handleAdd = async () => {
      try {
        await postSocialRoute(params);
        reload();
      } catch (error) {
        console.log(error);
      }
    };

    const handleEdit = async (routeId: number) => {
      try {
        await editSocialRoute({ id: routeId, ...params });
        reload();
      } catch (error) {
        console.log(error);
      }
    };

    if (props.id) return handleEdit(props.id);
    handleAdd();
  };

  return (
    <Formik initialValues={props.initialValues} onSubmit={handleFinish}>
      {({ handleChange, handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <div className="md:grid-cols-3 grid grid-cols-1 gap-4 mt-2">
            <div className="w-full col-span-1">
              <ISelect
                name="type"
                onChange={handleChange}
                className="w-full"
                value={values.type}
                options={[
                  { title: "insta", value: "instagram" },
                  { title: "twitterr", value: "twitter" },
                ]}
              />
            </div>
            <div className="w-full col-span-2">
              <IInput
                name="link"
                value={values.link}
                onChange={handleChange}
                className="w-full"
                placeholder={t("general.link")}
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <IButton
              type="button"
              className="mx-2 text-xs border"
              onClick={props.onCancel}
              style={{ borderColor: theme.color, color: theme.color }}>
              انصراف
            </IButton>
            <IButton
              type="submit"
              className="text-xs text-white"
              style={{ backgroundColor: theme.color }}>
              ثبت گزارش
            </IButton>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddOrEditRoute;
