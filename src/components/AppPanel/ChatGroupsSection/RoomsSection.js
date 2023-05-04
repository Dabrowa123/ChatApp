import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ChatIcon from "@mui/icons-material/Chat";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import ChatGroupList from "./ChatGroupList";
import ChatGroupCreator from "./ChatGroupCreator";
import { useSelector } from "react-redux";

const RoomsSection = () => {
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
        height: "100vh",
        minWidth: "25vw",
        maxWidth: "400px",
      }}
    >
      <Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"row"}
          spacing={2}
          sx={{ minHeight: "150px" }}
        >
          <ChatIcon
            sx={{ color: "white", minWidth: "80px", minHeight: "100px" }}
          />
          <Typography variant="h4">LOGO</Typography>
        </Stack>
        <Divider />
        <Stack mb={2} ml={3}>
          <Typography variant="h6" textAlign={"left"} mt={2} mb={2} ml={5}>
            GROUPS
          </Typography>
          <ChatGroupList />
          {isAdmin && <ChatGroupCreator />}
        </Stack>
      </Stack>
    </Box>
  );
};

export default RoomsSection;
