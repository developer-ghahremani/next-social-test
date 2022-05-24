import { FaChevronDown } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const DownArrow = (props: Props) => <FaChevronDown {...props} />;

export default DownArrow;
