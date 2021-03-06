import { Avatar, Box, ButtonBase, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../theme/colors";

interface Props {
  imageUrl: string;
  latestMessage: string;
  latestMessageTime: string;
  chatName: string;
  chatId: string;
}

const ChatPreview = ({
  imageUrl,
  latestMessage,
  latestMessageTime,
  chatName,
  chatId,
}: Props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/chat/" + chatId);
  };

  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 80,
        px: 2,
        borderBottom: "0.5px solid " + COLORS.chats.borderBottom,
        background: COLORS.chats.individualBackground,
      }}
    >
      <Box>
        <Avatar alt={chatName} src={imageUrl} sx={{ width: 56, height: 56 }} />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ color: COLORS.chats.chatName }} variant="h5">
          {chatName}
        </Typography>
        <Typography
          style={{
            textAlign: "start",
            fontSize: 12,
            color: COLORS.chats.latestMessage,
          }}
        >
          {latestMessage}
        </Typography>
      </Box>
      <Box sx={{ ml: "auto" }}>
        <Typography
          variant="caption"
          sx={{ color: COLORS.chats.latestMessageTime }}
        >
          {latestMessageTime}
        </Typography>
        <br />
        {/* <Typography variant="caption">3</Typography> */}
      </Box>
      {/* </Box> */}
    </ButtonBase>
  );
};

export default ChatPreview;
