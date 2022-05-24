import { MenuItem, Select, SelectProps, makeStyles } from "@mui/material";

import React from "react";

interface Props extends SelectProps {
  options: { title: string; value: string; disabled?: boolean }[];
}

const ISelect = (props: Props) => {
  return (
    <Select {...props}>
      {props.options.map((option) => (
        <MenuItem
          key={option.value}
          disabled={option.disabled}
          value={option.value}>
          {option.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ISelect;
