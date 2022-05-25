import { MenuItem, Select, SelectProps } from "@mui/material";

import React from "react";
import SelectOptionInterface from "models/SelectOption.model";
import { getCurrentLanguage } from "i18n";

interface Props extends SelectProps {
  options: SelectOptionInterface[];
}

const ISelect = (props: Props) => {
  const currentLanguage = getCurrentLanguage();
  return (
    <Select
      inputProps={{
        className: "outline-1 outline-double !rounded-none !font-vazir",
      }}
      {...props}>
      {props.options.map((option) => (
        <MenuItem
          style={{
            direction: currentLanguage === "fa" ? "rtl" : "ltr",
            fontFamily: "Vazir FD",
          }}
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
