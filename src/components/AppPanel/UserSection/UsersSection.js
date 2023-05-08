import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import UserList from "./UserList";
import UserSearch from "./UserSearch";
import LoggedInUser from "./LoggedInUser";
import useChatState from "../../../customHooks/useChatState";

const UsersSection = () => {
  const { groups, users, loggedUserId, searchUserItem } = useChatState();

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
