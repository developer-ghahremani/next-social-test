import { IconBaseProps } from "react-icons";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

interface Props extends IconBaseProps {}

const StarIcon = (props: Props) => <TiStarFullOutline {...props} />;

export default StarIcon;
