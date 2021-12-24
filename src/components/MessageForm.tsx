import { Box, colors, IconButton, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

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
    // <Box sx={{ mt: 9 }}>
    <Box
      sx={{
        bottom: 0,
        right: 0,
        height: 100,
        width: 100,
        // p: 1,
        bgcolor: colors.green[300],
        // display: "flex",
        position: "fixed",
        // transform: "translateX(-50%)",
      }}
    >
      {/* <Box>
          <TextField
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            style={{ width: "80%" }}
            placeholder="Type here..."
            onKeyDown={handleKeyDown}
          />
        </Box>
        <Box>
          <IconButton
            onClick={sendMessage}
            edge="start"
            color="primary"
            aria-label="back"
            sx={{ ml: 1 }}
          >
            <SendIcon fontSize={"large"} />
          </IconButton>
        </Box> */}
    </Box>
    // </Box>
  );
};

export default MessageForm;
