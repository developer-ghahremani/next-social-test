import { Collapse, CollapseProps } from "@mui/material";

import React from "react";

interface Props extends CollapseProps {}

const Collapsable = (props: Props) => <Collapse {...props} />;

export default Collapsable;
