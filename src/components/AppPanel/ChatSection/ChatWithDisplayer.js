import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Stack, Typography } from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

const ChatWithDisplayer = ({ currentGroupFilter }) => {
  const currentPickedUser = useSelector((state) => state.currentPickedUser);
  const users = useSelector((state) => state.users);
  const loggedUserId = useSelector((state) => state.isLogged.userId);

  const currentLoggedUserFilter = users.filter(
    (user) => user.userId === loggedUserId
  );
  const currentPickedUserFilter = users.filter(
    (user) => user.userId === currentPickedUser.userId
  );

  const displayFirstLetterOf = () => {
    const charArr = [...currentGroupFilter[0].groupName];
    return charArr[0].toUpperCase();
  };

  return (
    <>
      {currentGroupFilter[0].isPriv && !currentLoggedUserFilter[0].isAdmin && (
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
      {(!currentGroupFilter[0].isPriv ||
        (currentLoggedUserFilter[0].isAdmin &&
          currentGroupFilter[0].isPriv)) && (
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
          <Typography ml={2}>{currentGroupFilter[0].groupName}</Typography>
        </Stack>
      )}
    </>
  );
};

export default ChatWithDisplayer;
