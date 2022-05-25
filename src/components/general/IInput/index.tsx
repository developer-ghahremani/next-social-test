import {
  StandardTextFieldProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

import React from "react";

interface Props extends StandardTextFieldProps {}

const IInput = (props: Props) => (
  <TextField
    inputProps={{
      className: "outline-double outline-1",
    }}
    classes={{ root: "text-component" }}
    {...props}
  />
);

export default IInput;
