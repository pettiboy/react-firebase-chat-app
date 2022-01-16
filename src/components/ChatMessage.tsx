import { Box, colors, Typography } from "@mui/material";
import React from "react";
import { auth } from "../config/firebase";
import { COLORS } from "../theme/colors";

interface Props {
  uid: string;
  text: string;
  name: string;
}

const ChatMessage = ({ text, uid, name }: Props) => {
  // auth.currentUser?.uid;
  const isSent = "123njklsa0f2913" === uid;

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

  const backgroundColor = isSent
    ? COLORS.chat.messageSentBg
    : COLORS.chat.messageReceivedBg;

  return (
    <Box
      display={"flex"}
      sx={
        isSent
          ? {
              flexDirection: "row-reverse",
            }
          : {}
      }
    >
      <Box
        sx={{
          ...spacing,
          ...rightBorderRadius,
          bgcolor: backgroundColor,
          display: "inline-block",
        }}
      >
        <Typography style={{ fontSize: 14, color: COLORS.chat.messageByText }}>
          {name}
        </Typography>
        <Typography style={{ color: COLORS.chat.messageContent }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;
