import {
  StandardTextFieldProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

import React from "react";

interface Props extends StandardTextFieldProps {}

const IInput = (props: Props) => (
  <TextField classes={{ root: "text-component" }} {...props} />
);

export default IInput;
