import { useEffect, useState, useRef } from "react";
import List from "@mui/material/List";
import Message from "./Message";

const MessageList = ({ currentGroupId, groups, users, loggedUserId }) => {
  const currentGroupFilter = groups.find(
    (group) => group.groupId === currentGroupId
  );
  const messageList = currentGroupFilter.messages.map((message) => (
    <Message
      key={message.id}
      groupId={currentGroupId}
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
      {messageList}
    </List>
  );
};

export default MessageList;
