import { Box, colors, IconButton, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { COLORS } from "../theme/colors";

interface Props {
  sendMessageCallback(messageText: string): void;
}

const MessageForm = ({ sendMessageCallback }: Props) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = () => {
    if (messageText.length > 0) {
      sendMessageCallback(messageText);
      setMessageText("");
    }
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        bottom: 0,
        right: 0,
        bgcolor: COLORS.chat.messageFormBg,
        p: 1,
      }}
    >
      <Box sx={{ flex: 8 }}>
        <TextField
          value={messageText}
          style={{ width: "100%" }}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type here..."
          onKeyDown={handleKeyDown}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <IconButton
          onClick={sendMessage}
          edge="start"
          color="primary"
          sx={{ ml: 1 }}
        >
          <SendIcon fontSize={"large"} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MessageForm;
