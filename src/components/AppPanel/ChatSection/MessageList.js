import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import { useSelector } from "react-redux";
import Message from "./Message";
import ChatWithDisplayer from "./ChatWithDisplayer";

const MessageList = ({ currentGroupId, groups, users, loggedUserId }) => {
  const currentGroupFilter = groups.filter(
    (group) => group.groupId === currentGroupId
  );
  const messageList = currentGroupFilter[0].messages.map((message) => (
    <Message
      key={message.id}
      groupId={currentGroupId}
      {...message}
      users={users}
      loggedUserId={loggedUserId}
    />
  ));

  // Scrollable container
  const container = useRef(null);
  const Scroll = () => {
    const { scrollHeight } = container.current;
    container.current?.scrollTo(0, scrollHeight);
  };
  useEffect(() => {
    Scroll();
  }, [messageList]);

  return (
    <List ref={container} sx={{ flexGrow: "4", overflow: "auto" }}>
      {messageList}
    </List>
  );
};

export default MessageList;
