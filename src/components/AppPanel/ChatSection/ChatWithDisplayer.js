import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Stack, Typography } from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import InfoIcon from "@mui/icons-material/Info";

const ChatWithDisplayer = () => {
  const displayCurrentPickedGroup = useSelector((state) => state.currentGroup);
  const displayGroups = useSelector((state) => state.chatGroups);
  const currentPickedUser = useSelector((state) => state.currentPickedUser);
  const users = useSelector((state) => state.users);
  const loggedUserId = useSelector((state) => state.isLogged.userId);
  const loggedUserArr = users.filter((user) => user.userId === loggedUserId);

  const currentPickedUserFilter = users.filter(
    (user) => user.userId === currentPickedUser.userId
  );

  const filteredGroup = displayGroups.filter(
    (group) => group.groupId === displayCurrentPickedGroup.groupId
  );

  const displayFirstLetterOf = () => {
    const charArr = [...filteredGroup[0].groupName];
    return charArr[0].toUpperCase();
  };

  return (
    <>
      {filteredGroup[0].isPriv && !loggedUserArr[0].isAdmin && (
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
            <Avatar sx={{ bgcolor: currentPickedUserFilter[0].avatarColor }}>
              {displayFirstLetterOf()}
            </Avatar>
          </Badge>
          <Typography ml={2}>{currentPickedUserFilter[0].userName}</Typography>
        </Stack>
      )}
      {(!filteredGroup[0].isPriv ||
        (loggedUserArr[0].isAdmin && filteredGroup[0].isPriv)) && (
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
          <Typography ml={2}>{filteredGroup[0].groupName}</Typography>
        </Stack>
      )}
    </>
  );
};

export default ChatWithDisplayer;
