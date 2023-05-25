import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Stack, Typography } from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import InfoIcon from "@mui/icons-material/Info";
import { useState, useEffect } from "react";
import axios from "axios";

const ChatWithDisplayer = ({
  currentPickedUser,
  group,
  users,
  loggedUserId,
}) => {
  const currentLoggedUserFilter = users.find(
    (user) => user.userId === loggedUserId
  );
  const currentPickedUserFilter = users.find(
    (user) => user.userId === currentPickedUser.userId
  );

  const displayFirstLetterOf = () => {
    const charArr = [...currentPickedUserFilter.userName];
    return charArr[0].toUpperCase();
  };

  if (group !== null) {
    return (
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          {group.priv && !currentLoggedUserFilter.admin && (
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              p={3}
              sx={{ maxHeight: "70px", minHeight: "70px" }}
            >
              <Badge
                color="primary"
                badgeContent=" "
                overlap="circular"
                variant="dot"
              >
                <Avatar sx={{ bgcolor: currentPickedUserFilter.avatarColor }}>
                  {displayFirstLetterOf()}
                </Avatar>
              </Badge>
              <Typography ml={2}>{currentPickedUserFilter.userName}</Typography>
            </Stack>
          )}
          {(!group.priv || (currentLoggedUserFilter.admin && group.priv)) && (
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              p={3}
              sx={{ maxHeight: "70px", minHeight: "70px" }}
            >
              <GroupsRoundedIcon
                sx={{
                  color: "#002F6D",
                  background: "white",
                  padding: "5px",
                  borderRadius: "12px",
                  height: "35px",
                  width: "35px",
                }}
              />
              <Typography ml={2}>{group.groupName}</Typography>
            </Stack>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <LocalPhoneIcon sx={{ marginRight: "35px", color: "#263238" }} />
          <VideocamIcon sx={{ marginRight: "35px", color: "#263238" }} />
          <InfoIcon sx={{ marginRight: "35px", color: "#263238" }} />
        </Stack>
      </Stack>
    );
  }
};

export default ChatWithDisplayer;
