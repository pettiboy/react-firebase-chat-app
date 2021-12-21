import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatsAppBar from "../components/AppBars/ChatsAppBar";
import ChatPreview from "../components/ChatPreview/ChatPreview";
import Logout from "../components/Utils/Logout/Logout";
import { auth } from "../config/firebase";

interface Props {}

const allChats = [
  {
    imageUrl: "https://source.unsplash.com/random/200x200",
    chatName: "Everyone",
    latestMessage: "React > Flutter",
    latestMessageTime: "10:23",
  },
  {
    imageUrl: "https://source.unsplash.com/random/200x200",
    chatName: "Another One",
    latestMessage: "React >>>> Flutter",
    latestMessageTime: "11:23",
  },
];

const Chats = (props: Props) => {
  const [chats, setChats] = useState(allChats);
  const [searchQuery, setSearchQuery] = useState("");

  const updateQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  useEffect(() => {
    setChats((prev) => {
      const filtered = prev.filter((chat) =>
        chat.chatName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      return filtered;
    });
    return () => {};
  }, [searchQuery]);

  return (
    <div>
      <ChatsAppBar updateQueryCallback={updateQuery} />
      {chats.map((chat, index) => (
        <ChatPreview
          key={index}
          imageUrl={chat.imageUrl}
          chatName={chat.chatName}
          latestMessage={chat.latestMessage}
          latestMessageTime={chat.latestMessageTime}
        />
      ))}
      {/* <Logout /> */}
    </div>
  );
};

export default Chats;
