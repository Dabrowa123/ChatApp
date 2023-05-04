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
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

const ChatWithDisplayer = () => {
  const displayCurrentPickedGroup = useSelector((state) => state.currentGroup);
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) => group.groupId === displayCurrentPickedGroup.groupId
  );
  const currentPickedGroupName = filteredGroup[0];
  const isPriv = filteredGroup[0].isPriv;

  return (
    <Stack
      direction={"row"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      p={3}
    >
      <Box>
        {isPriv && (
          <Badge
            color="primary"
            badgeContent=" "
            overlap="circular"
            variant="dot"
          >
            <Avatar sx={{ bgcolor: lightBlue[500] }}>OP</Avatar>
          </Badge>
        )}
        {!isPriv && (
          <GroupsRoundedIcon
            color="primary"
            sx={{
              background: "InfoBackground",
              padding: "5px",
              borderRadius: "12px",
            }}
          />
        )}
      </Box>
      <Typography ml={2}>{currentPickedGroupName.groupName}</Typography>
    </Stack>
  );
};

export default ChatWithDisplayer;
