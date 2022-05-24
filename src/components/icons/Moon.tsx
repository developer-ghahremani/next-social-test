import { BsFillMoonFill } from "react-icons/bs";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const MoonIcon = (props: Props) => <BsFillMoonFill {...props} />;

export default MoonIcon;
