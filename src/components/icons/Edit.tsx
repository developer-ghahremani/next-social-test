import { IconBaseProps } from "react-icons";
import { MdEdit } from "react-icons/md";
import React from "react";

interface Props extends IconBaseProps {}

const EditIcon = (props: Props) => <MdEdit {...props} />;

export default EditIcon;
