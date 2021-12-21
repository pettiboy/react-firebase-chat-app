import React from "react";
import { useParams } from "react-router-dom";
import ChatAppBar from "../components/AppBars/ChatAppBar";

interface Props {}

const Chat = (props: Props) => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <ChatAppBar name={params.chatId || ""} imageUrl="123" />
    </div>
  );
};

export default Chat;
