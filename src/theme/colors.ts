import { colors } from "@mui/material";

export const COLORS = {
  appBar: {
    background: colors.purple[500],
    text: "black",
  },
  chats: {
    combinedBackground:
      "radial-gradient(ellipse farthest-corner at 80vw 15vh , rgba( 250, 240, 228, 0.5) 5%, rgba( 250,240,228,0) 95%)",
    chatName: colors.grey[900],
    individualBackground: "none",
    latestMessage: colors.grey[400],
    latestMessageTime: colors.grey[500],
    borderBottom: colors.grey[600],
  },
  chat: {
    background: "#fff",
    messageFormBg: "#fff",
    messageSentBg: colors.amber[100],
    messageReceivedBg: colors.amber[200],
    messageByText: colors.grey[500],
    messageContent: colors.grey[800],
  },
};
