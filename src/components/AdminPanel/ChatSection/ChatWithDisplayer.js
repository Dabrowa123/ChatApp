import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MessageSender from "./MessageSender";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { lightBlue } from "@mui/material/colors";
import { Stack, Typography } from "@mui/material";

const ChatWithDisplayer = () => {
  const displayCurrentPickedGroup = useSelector((state) => state.currentGroup);
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) => group.groupId === displayCurrentPickedGroup.groupId
  );
  const currentPickedGroupName = filteredGroup[0].groupName;
  console.log(currentPickedGroupName);

  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      p={3}
    >
      <Box>
        <Badge
          color="primary"
          badgeContent=" "
          overlap="circular"
          variant="dot"
        >
          <Avatar sx={{ bgcolor: lightBlue[500] }}>OP</Avatar>
        </Badge>
      </Box>
      <Typography ml={2}>{currentPickedGroupName}</Typography>
    </Stack>
  );
};

export default ChatWithDisplayer;
