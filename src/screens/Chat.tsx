import { colors } from "@mui/material";
import React, {
  createRef,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import ChatAppBar from "../components/AppBars/ChatAppBar";
import ChatMessage from "../components/ChatMessage";
import MessageForm from "../components/MessageForm";
import { COLORS } from "../theme/colors";

interface Props {}

const HCMessages = [
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
  {
    text: "Hello, World!",
    uid: "12a3njklsa02913",
    name: "Baz",
  },
  {
    uid: "12a3njklsa02913",
    text: "Hello, World!",
    name: "Baz",
  },
];

const Chat = (props: Props) => {
  const [messages, setMessages] = useState(HCMessages);
  const scrollStartRef = createRef<HTMLSpanElement>();
  const params = useParams();

  const sendMessageCallback = (messageText: string) => {
    const messageObj = {
      uid: "123njklsa0f2913",
      text: messageText,
      name: "Bar",
    };
    setMessages((prev) => [...prev, messageObj]);
  };

  useEffect(() => {
    scrollStartRef.current?.scrollIntoView();
    return () => {};
  }, [messages]);

  return (
    <div style={{ backgroundColor: COLORS.chat.background }}>
      <ChatAppBar name={params.chatId || ""} imageUrl="123" />
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          text={message.text}
          uid={message.uid}
          name={message.name}
        />
      ))}
      <span ref={scrollStartRef}></span>
      <MessageForm sendMessageCallback={sendMessageCallback} />
    </div>
  );
};

export default Chat;
