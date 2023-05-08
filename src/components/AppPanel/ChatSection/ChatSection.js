import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import { useSelector } from "react-redux";
import Message from "./Message";
import ChatWithDisplayer from "./ChatWithDisplayer";

const ChatSection = () => {
  const currentGroupId = useSelector((state) => state.currentGroup.groupId);
  const groups = useSelector((state) => state.chatGroups);
  const currentGroupFilter = groups.filter(
    (group) => group.groupId === currentGroupId
  );
  const messageList = currentGroupFilter[0].messages.map((message) => (
    <Message key={message.id} groupId={currentGroupId} {...message} />
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
  }, [messageList]);

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "50vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChatWithDisplayer currentGroupFilter={currentGroupFilter} />
      <Divider />
      <List ref={container} sx={{ flexGrow: "4", overflow: "auto" }}>
        {messageList}
      </List>
      <Divider />
      <MessageSender />
    </Box>
  );
};

export default ChatSection;
