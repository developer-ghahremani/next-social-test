import ILoading from "components/ILoading";
import { IModal } from "components/general";
import React from "react";
import { useAppSelector } from "store";

const LoadingModal = () => {
  const { loadingModal } = useAppSelector((s) => s.modal);
  return (
    <IModal open={loadingModal}>
      <ILoading />
    </IModal>
  );
};

export default LoadingModal;
