import { BsSun } from "react-icons/bs";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const SunIcon = (props: Props) => <BsSun {...props} />;

export default SunIcon;
