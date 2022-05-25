import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<{}> {}

const iButton = ({ children, className, ...props }: Props) => (
  <button className={`py-1 px-2 rounded-md  ${className}`} {...props}>
    {children}
  </button>
);

export default iButton;
