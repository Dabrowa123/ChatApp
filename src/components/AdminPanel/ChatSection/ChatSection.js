import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import { useSelector } from "react-redux";

import Message from "./Message";

const ChatSection = () => {
  const currentGroupId = useSelector((state) => state.currentGroup.groupId);
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) => group.groupId === currentGroupId
  );
  const messageList = filteredGroup[0].messages.map((message) => (
    <Message key={Math.floor(Math.random() * 1234)} {...message} />
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
    <Box sx={{ bgcolor: "#f5f5f5", height: "100vh", width: "60vw" }}>
      <Grid item xs={9}>
        <List
          ref={container}
          sx={{ minHeight: "86vh", maxHeight: "86vh", overflow: "auto" }}
        >
          {messageList}
        </List>
        <Divider />
        <MessageSender />
      </Grid>
    </Box>
  );
};

export default ChatSection;
