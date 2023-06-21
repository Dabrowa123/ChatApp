import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import UserList from "./UserList";
import UserSearch from "./UserSearch";
import LoggedInUser from "./LoggedInUser";
import useChatState from "../../../customHooks/useChatState";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGroupsDataSuccess,
  fetchGroupsDataFailure,
} from "../../../actions/groupActions/fetchGroupsDataActions";
import axios from "axios";

const SOCKET_URL = "ws://localhost:8082/ws-user";

const UsersSection = ({ groups }) => {
  const { users, loggedUserId, searchUserItem } = useChatState();

  // useEffect(() => {
  //   let client = null;

  //   const onConnected = () => {
  //     console.log("Connected!!");
  //     client.subscribe("/topic/user", function (msg) {
  //       if (msg.body) {
  //         const jsonBody = JSON.parse(msg.body);
  //         if (jsonBody) {
  //           // if (jsonBody.chatGroupId === currentGroupId) {
  //           //   setMessages((prevMessages) => [...prevMessages, jsonBody]);
  //           // }
  //         }
  //       }
  //     });
  //   };

  //   const onDisconnected = () => {
  //     console.log("Disconnected!!");
  //   };

  //   client = new Client({
  //     brokerURL: SOCKET_URL,
  //     reconnectDelay: 5000,
  //     heartbeatIncoming: 4000,
  //     heartbeatOutgoing: 4000,
  //     onConnect: onConnected,
  //     onDisconnect: onDisconnected,
  //   });

  //   client.activate();

  //   return () => {
  //     client.deactivate();
  //   };
  // });

  return (
    <Box
      sx={{
        minheight: "100vh",
        maxHeight: "100vh",
        minWidth: "25vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <LoggedInUser loggedUserId={loggedUserId} users={users} />
      <Divider sx={{ bgcolor: "#ffbd59", height: "3px" }} />
      <Typography variant="h6" textAlign={"left"} mt={3} mb={2} ml={5}>
        USERS
      </Typography>
      <Box sx={{ flexGrow: "4", overflow: "auto" }}>
        <UserList
          users={users}
          groups={groups}
          loggedUserId={loggedUserId}
          searchUserItem={searchUserItem}
        />
      </Box>
      <Divider sx={{ bgcolor: "grey" }} />
      <Box
        pb={3}
        pl={2}
        sx={{
          background: "#002F6D",
        }}
      >
        <UserSearch />
      </Box>
    </Box>
  );
};

export default UsersSection;
