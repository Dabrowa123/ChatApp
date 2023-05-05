import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import ChatGroupList from "./ChatGroupList";
import ChatGroupCreator from "./ChatGroupCreator";
import { useSelector } from "react-redux";
import ChatSearch from "./ChatSearch";
import ChatGroupLogo from "./ChatGroupLogo";

const ChatGroupSection = () => {
  const displayUsers = useSelector((state) => state.users);
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const filteredUser = displayUsers.filter(
    (user) => user.userId === loggedUser
  );
  const isAdmin = filteredUser[0].isAdmin;
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #36EAEF, #1565c0)",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "25vw",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChatGroupLogo />
      <Divider />
      <Typography variant="h6" textAlign={"left"} mt={3} mb={2} ml={5}>
        GROUPS
      </Typography>
      <Box sx={{ flexGrow: "4", overflow: "auto" }}>
        <ChatGroupList />
      </Box>
      <Box pb={3} pl={2}>
        <ChatSearch />
        {isAdmin && <ChatGroupCreator />}
      </Box>
    </Box>
  );
};

export default ChatGroupSection;
