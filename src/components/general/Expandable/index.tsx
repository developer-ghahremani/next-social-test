import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import { DownArrowIcon } from "components/icons";
import React from "react";
import { useAppSelector } from "store";

interface Props {
  title: string;
  id?: string;
  details: string | JSX.Element;
  className?: string;
  defaultExpanded?: boolean;
}

const Expandable = (props: Props) => {
  const { theme } = useAppSelector((s) => s.settings);
  return (
    <Accordion
      defaultExpanded={props.defaultExpanded}
      className={`!text-inherit ${
        theme.darkMode ? "!bg-gray-700" : "!bg-white"
      } ${props.className}`}>
      <AccordionSummary
        expandIcon={<DownArrowIcon color={theme.color} />}

        // aria-controls="panel1a-content"
        // id="panel1a-header"
      >
        <p style={{ color: theme.color }} className=" font-bold">
          {props.title}
        </p>
      </AccordionSummary>
      <AccordionDetails>
        {typeof props.details === "string" ? (
          <p className={theme.darkMode ? "text-white" : "text-black"}>
            {props.details}
          </p>
        ) : (
          props.details
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default Expandable;
