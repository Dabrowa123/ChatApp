import { useEffect, useState, useRef } from "react";
import List from "@mui/material/List";
import Message from "./Message";

const MessageList = ({ messages, users, loggedUserId }) => {
  const messageList = messages.map((message) => (
    <Message
      key={message.messageId}
      {...message}
      users={users}
      loggedUserId={loggedUserId}
    />
  ));

  // Scrollable container
  const [savedMessageListLength, setSavedMessageListLength] = useState(
    messageList.length
  );

  const container = useRef(null);
  const Scroll = () => {
    const { scrollHeight } = container.current;
    container.current?.scrollTo(0, scrollHeight);
  };
  useEffect(() => {
    setSavedMessageListLength(messageList.length);
    if (messageList.length !== savedMessageListLength) {
      Scroll();
    }
  }, [messageList, savedMessageListLength]);

  return (
    <List ref={container} sx={{ flexGrow: "4", overflow: "auto" }}>
      <p></p>
      {messageList}
    </List>
  );
};

export default MessageList;
