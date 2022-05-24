import { IconBaseProps } from "react-icons";
import { MdDelete } from "react-icons/md";
import React from "react";

interface Props extends IconBaseProps {}

const BinIcon = (props: Props) => <MdDelete {...props} />;

export default BinIcon;
