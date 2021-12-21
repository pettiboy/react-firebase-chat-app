import React from "react";
import { useParams } from "react-router-dom";
import ChatAppBar from "../components/AppBars/ChatAppBar";
import ChatMessage from "../components/ChatMessage/ChatMessage";

interface Props {}

const messages = [
  {
    text: "Hello, World!",
    uid: "123njklsa0f2913",
    name: "Bar",
  },
  {
    text: "Hello, World!",
    uid: "123njklsa0a2913",
    name: "Foo",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
];

const Chat = (props: Props) => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <ChatAppBar name={params.chatId || ""} imageUrl="123" />
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          text={message.text}
          uid={message.uid}
          name={message.name}
        />
      ))}
    </div>
  );
};

export default Chat;
