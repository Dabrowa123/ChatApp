import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import { useSelector } from "react-redux";

import Message from "./Message";

const ChatSection = () => {
  const groupId = 1;
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) => group.groupId === groupId
  );
  const messageList = filteredGroup[0].messages.map((message) => (
    <Message key={Math.floor(Math.random() * 1234)} {...message} />
  ));
  return (
    <Box sx={{ bgcolor: "#f5f5f5", height: "100vh", width: "60vw" }}>
      <Grid item xs={9}>
        <List sx={{ minHeight: "86vh" }}>{messageList}</List>
        <Divider />
        <MessageSender />
      </Grid>
    </Box>
  );
};

export default ChatSection;
