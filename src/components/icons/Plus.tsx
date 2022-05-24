import { FaPlus } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const PlusIcon = (props: Props) => <FaPlus {...props} />;

export default PlusIcon;
