import { Modal, ModalProps } from "@mui/material";

import React from "react";
import { useAppSelector } from "../../../store";

interface Props extends ModalProps {}

const IModal = ({ children, ...props }: Props) => {
  const { theme } = useAppSelector((s) => s.settings);
  return (
    <Modal {...props}>
      <div
        className={`absolute top-[50%] md:left-[calc(50%-17.5rem)] md:w-[35rem] w-[90%] left-[5%] outline-none p-4 ${
          theme.darkMode ? "bg-dark text-white" : "bg-white text-dark"
        }`}>
        {children}
      </div>
    </Modal>
  );
};

export default IModal;
