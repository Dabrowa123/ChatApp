import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import { useSelector } from "react-redux";
import ChatWithDisplayer from "./ChatWithDisplayer";
import MessageList from "./MessageList";

const ChatSection = () => {
  const currentGroupId = useSelector((state) => state.currentGroup.groupId);
  const groups = useSelector((state) => state.chatGroups);
  const currentPickedUser = useSelector((state) => state.currentPickedUser);
  const users = useSelector((state) => state.users);
  const loggedUserId = useSelector((state) => state.isLogged.userId);

  const currentGroupFilter = groups.find(
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
      <Divider />
      <MessageSender
        currentGroupId={currentGroupId}
        loggedUserId={loggedUserId}
        users={users}
      />
    </Box>
  );
};

export default ChatSection;
