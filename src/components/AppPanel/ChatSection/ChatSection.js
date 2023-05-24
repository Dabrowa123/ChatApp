import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import ChatWithDisplayer from "./ChatWithDisplayer";
import MessageList from "./MessageList";
import useChatState from "../../../customHooks/useChatState";
import { useState, useEffect } from "react";
import axios from "axios";

const ChatSection = () => {
  const { currentGroupId, groups, currentPickedUser, users, loggedUserId } =
    useChatState();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/messages/group/${currentGroupId}`
        );
        setMessages(response.data);
      } catch (error) {
        console.log("Błąd połączenia");
      }
    };
    fetchMessages();
  }, [currentGroupId]);
  console.log(currentGroupId);
  console.log(messages);
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
      {/* <ChatWithDisplayer
        currentGroupFilter={currentGroupFilter}
        currentPickedUser={currentPickedUser}
        users={users}
        loggedUserId={loggedUserId}
      /> */}
      <Divider />
      {/* <MessageList
        messages={messages}
        users={users}
        loggedUserId={loggedUserId}
      /> */}
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
