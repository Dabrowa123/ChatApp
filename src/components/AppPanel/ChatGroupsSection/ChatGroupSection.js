import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import ChatGroupList from "./ChatGroupList";
import ChatGroupCreator from "./ChatGroupCreator";
import ChatGroupSearch from "./ChatGroupSearch";
import Logo from "../../../pictures/Logo.png";
import axios from "axios";
import useChatState from "../../../customHooks/useChatState";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGroupsDataFailure,
  fetchGroupsDataSuccess,
} from "../../../actions/groupActions/fetchGroupsDataActions";

const ChatGroupSection = ({ groups }) => {
  const dispatch = useDispatch();
  const { currentGroupId, users, loggedUserId, searchGroupItem } =
    useChatState();

  console.log(groups);
  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);

  return (
    <Box
      sx={{
        background: "#002F6D",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "25vw",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        spacing={2}
        sx={{ minHeight: "170px" }}
      >
        <img src={Logo} alt="logo" width="50%" height="auto"></img>
      </Stack>
      <Divider sx={{ bgcolor: "#ffbd59" }} />
      <Typography
        sx={{ color: "white" }}
        variant="h6"
        textAlign={"left"}
        mt={3}
        mb={2}
        ml={5}
      >
        GROUPS
      </Typography>
      <Box sx={{ flexGrow: "4", overflow: "auto" }}>
        <ChatGroupList
          users={users}
          groups={groups}
          loggedUserId={loggedUserId}
          searchGroupItem={searchGroupItem}
          currentGroupId={currentGroupId}
        />
      </Box>
      <Divider sx={{ bgcolor: "white" }} />
      <Box pb={3} pl={4}>
        <ChatGroupSearch />
        {filteredLoggedUser.isAdmin && <ChatGroupCreator />}
      </Box>
    </Box>
  );
};

export default ChatGroupSection;
