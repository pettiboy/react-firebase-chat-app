import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
  imageUrl: string;
  latestMessage: string;
  latestMessageTime: string;
  chatName: string;
}

const ChatPreview = ({
  imageUrl,
  latestMessage,
  latestMessageTime,
  chatName,
}: Props) => {
  return (
    <Box
      sx={{
        // borderTop: "1px solid grey",
        borderBottom: "0.5px solid lightgrey",
        maxWidth: 550,
        height: 80,
        // bgcolor: "grey.500",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
        display: "flex",
        px: 2,
        alignItems: "center",
      }}
    >
      {/* image */}
      <Box>
        <Avatar alt={chatName} src={imageUrl} sx={{ width: 56, height: 56 }} />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography variant="h5">{chatName}</Typography>
        <Typography sx={{ pl: 0.15 }} variant="caption">
          {latestMessage}
        </Typography>
      </Box>
      <Box sx={{ ml: "auto" }}>
        <Typography variant="caption">{latestMessageTime}</Typography>
        <br />
        {/* <Typography variant="caption">3</Typography> */}
      </Box>
    </Box>
  );
};

export default ChatPreview;
