import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import ChatWithDisplayer from "./ChatWithDisplayer";
import MessageList from "./MessageList";
import useChatState from "../../../customHooks/useChatState";
import { useState, useEffect } from "react";
import axios from "axios";
import { Client } from "@stomp/stompjs";

const SOCKET_URL = "ws://localhost:8082/ws-message";

const ChatSection = () => {
  const { currentGroupId, currentPickedUser, users, loggedUserId } =
    useChatState();

  const [messages, setMessages] = useState([]);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/groups/${currentGroupId}`
        );
        setGroup(response.data);
        setMessages(response.data.messages);
      } catch (error) {
        console.log("Błąd połączenia");
      }
    };
    fetchGroup();
  }, [currentGroupId]);

  useEffect(() => {
    let client = null;

    const onConnected = () => {
      console.log("Connected!!");
      client.subscribe("/topic/message", function (msg) {
        if (msg.body) {
          const jsonBody = JSON.parse(msg.body);
          if (jsonBody) {
            setMessages((prevMessages) => [...prevMessages, jsonBody]);
          }
        }
      });
    };

    const onDisconnected = () => {
      console.log("Disconnected!!");
    };

    client = new Client({
      brokerURL: SOCKET_URL,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: onConnected,
      onDisconnect: onDisconnected,
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, [currentGroupId]);

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
        currentPickedUser={currentPickedUser}
        group={group}
        currentGroupId={currentGroupId}
        users={users}
        loggedUserId={loggedUserId}
      />
      <Divider />
      <MessageList
        messages={messages}
        users={users}
        loggedUserId={loggedUserId}
      />
      <Divider />
      <MessageSender
        currentGroupId={currentGroupId}
        loggedUserId={loggedUserId}
        users={users}
        group={group}
      />
    </Box>
  );
};

export default ChatSection;
