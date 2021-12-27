import { Box } from "@mui/material";
import { height } from "@mui/system";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const CenteredBox = ({ children }: Props) => {
  return <div className="overlay">{children}</div>;
};

export default CenteredBox;
