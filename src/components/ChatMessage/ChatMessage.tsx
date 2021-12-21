import { Box, colors, Typography } from "@mui/material";
import React from "react";

interface Props {
  uid: string;
  text: string;
  name: string;
}

const ChatMessage = ({ text, uid, name }: Props) => {
  const spacing = {
    px: 2,
    py: 1,
    mx: 2,
    my: 1,
  };

  const rightBorderRadius = {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
  };

  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: "row-reverse",
      }}
    >
      <Box
        sx={{
          ...spacing,
          ...rightBorderRadius,
          bgcolor: colors.purple[100],
          display: "inline-block",
        }}
      >
        <Typography style={{ fontSize: 14, color: colors.grey[800] }}>
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;
