import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Stack, Typography } from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import InfoIcon from "@mui/icons-material/Info";

const ChatWithDisplayer = ({
  currentGroupFilter,
  currentPickedUser,
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

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack>
        {currentGroupFilter.isPriv && !currentLoggedUserFilter.isAdmin && (
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
        {(!currentGroupFilter.isPriv ||
          (currentLoggedUserFilter.isAdmin && currentGroupFilter.isPriv)) && (
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
            <Typography ml={2}>{currentGroupFilter.groupName}</Typography>
          </Stack>
        )}
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <LocalPhoneIcon sx={{ marginRight: "35px" }} />
        <VideocamIcon sx={{ marginRight: "35px" }} />
        <InfoIcon sx={{ marginRight: "35px" }} />
      </Stack>
    </Stack>
  );
};

export default ChatWithDisplayer;
