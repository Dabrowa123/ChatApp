import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import { useSelector } from "react-redux";
import Message from "./Message";
import ChatWithDisplayer from "./ChatWithDisplayer";
import MessageList from "./MessageList";

const ChatSection = () => {
  const currentGroupId = useSelector((state) => state.currentGroup.groupId);
  const groups = useSelector((state) => state.chatGroups);
  const currentPickedUser = useSelector((state) => state.currentPickedUser);
  const users = useSelector((state) => state.users);
  const loggedUserId = useSelector((state) => state.isLogged.userId);

  const currentGroupFilter = groups.filter(
    (group) => group.groupId === currentGroupId
  );

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
      <ChatWithDisplayer
        currentGroupFilter={currentGroupFilter}
        currentPickedUser={currentPickedUser}
        users={users}
        loggedUserId={loggedUserId}
      />
      <Divider />
      <MessageList
        currentGroupId={currentGroupId}
        groups={groups}
        users={users}
        loggedUserId={loggedUserId}
      />
      {/* <List ref={container} sx={{ flexGrow: "4", overflow: "auto" }}>
        {messageList}
      </List> */}
      <Divider />
      <MessageSender />
    </Box>
  );
};

export default ChatSection;
