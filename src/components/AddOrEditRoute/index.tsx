import * as yup from "yup";

import { IButton, IInput, ISelect } from "components/general";
import { editSocialRoute, postSocialRoute } from "api/socialRout";

import { Formik } from "formik";
import React from "react";
import { socialNetworks } from "constant";
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

  const validationSchem = yup.object().shape({
    type: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.type") })),
    link: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.link") }))
      .url(t("messages.isUrl", { fieldName: t("general.link") })),
  });

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
    <Formik
      initialValues={props.initialValues}
      onSubmit={handleFinish}
      validationSchema={validationSchem}>
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="md:grid-cols-3 grid grid-cols-1 gap-4 mt-2">
            <div className="w-full col-span-1">
              <ISelect
                name="type"
                onChange={handleChange}
                className="w-full"
                // placeholder={t("general.link")}
                value={values.type}
                options={socialNetworks.map((item) => ({
                  ...item,
                  title: t(`general.${item.title}`),
                }))}
              />
              {touched.type && errors.type && (
                <p className="text-xs text-red-900">{errors.type}</p>
              )}
            </div>
            <div className="w-full col-span-2">
              <IInput
                name="link"
                value={values.link}
                onChange={handleChange}
                className="w-full"
                placeholder={t("general.link")}
              />
              {touched.link && errors.link && (
                <p className="text-xs text-red-900">{errors.link}</p>
              )}
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
