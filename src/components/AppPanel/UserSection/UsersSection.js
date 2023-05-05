import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import UserList from "./UserList";
import UserSearch from "./UserSearch";
import LoggedInUser from "./LoggedInUser";

const UsersSection = () => {
  return (
    <Box
      sx={{
        minheight: "100vh",
        minWidth: "25vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LoggedInUser />
      <Divider />
      <Typography variant="h6" textAlign={"left"} mt={3} mb={2} ml={5}>
        USERS
      </Typography>
      <Box sx={{ flexGrow: "4", overflow: "auto" }}>
        <UserList />
      </Box>
      <Box
        pb={3}
        pl={2}
        sx={{
          background: "#eceff1",
        }}
      >
        <UserSearch />
      </Box>
    </Box>
  );
};

export default UsersSection;
