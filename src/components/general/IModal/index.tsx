import { Modal, ModalProps } from "@mui/material";

import React from "react";
import { useAppSelector } from "store";

export interface IModalProps extends ModalProps {}

const IModal = ({ children, ...props }: IModalProps) => {
  const { theme } = useAppSelector((s) => s.settings);
  return (
    <Modal {...props}>
      <div
        className={`absolute top-[40%] md:left-[calc(50%-15rem)] md:w-[30rem] w-[90%] left-[5%] outline-none p-4 ${
          theme.darkMode ? "bg-dark text-white" : "bg-white text-dark"
        }`}>
        {children}
      </div>
    </Modal>
  );
};

export default IModal;
