import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";
import ChatIcon from "@mui/icons-material/Chat";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ChatGroupList from "../ChatGroupList";
import ChatGroupCreator from "../ChatGroupCreator";

const RoomsSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #36EAEF, #1565c0)",
        height: "150vh",
        width: "25vw",
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

        <Divider orientation="vertical" />
        <Stack mb={2} ml={3}>
          <Typography variant="h6" textAlign={"left"} mt={2} mb={2} ml={5}>
            ROOMS
          </Typography>
          <ChatGroupList />
          {/* <ChatGroupCreator /> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default RoomsSection;
