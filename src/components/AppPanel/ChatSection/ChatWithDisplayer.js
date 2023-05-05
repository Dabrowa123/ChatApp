import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Stack, Typography } from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

const ChatWithDisplayer = () => {
  const displayCurrentPickedGroup = useSelector((state) => state.currentGroup);
  const displayGroups = useSelector((state) => state.chatGroups);
  const currentPickedUser = useSelector((state) => state.currentPickedUser);
  const users = useSelector((state) => state.users);
  const filteredGroup = displayGroups.filter(
    (group) => group.groupId === displayCurrentPickedGroup.groupId
  );

  const currentPickedGroupName = filteredGroup[0];
  const isPriv = filteredGroup[0].isPriv;
  const displayUsers = useSelector((state) => state.users);
  const loggedUser = useSelector((state) => state.isLogged.userId);
  let privGroupUsername;
  const filteredUser = displayUsers.filter(
    (user) => user.userId === loggedUser
  );
  const isAdmin = filteredUser[0].isAdmin;
  const currentPickedUserFilter = users.filter(
    (user) => user.userId === currentPickedUser.userId
  );
  if (currentPickedUser.userId !== null) {
    privGroupUsername = currentPickedUserFilter[0].userName;
  }

  const displayFirstLetterOfUsername = () => {
    const charArr = [...privGroupUsername];
    return charArr[0].toUpperCase();
  };

  return (
    <>
      {isPriv && !isAdmin && (
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
              {displayFirstLetterOfUsername()}
            </Avatar>
          </Badge>
          <Typography ml={2}>{privGroupUsername}</Typography>
        </Stack>
      )}
      {(!isPriv || (isAdmin && isPriv)) && (
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          p={3}
          sx={{ maxHeight: "70px", minHeight: "70px" }}
        >
          <GroupsRoundedIcon
            color="primary"
            sx={{
              background: "InfoBackground",
              padding: "5px",
              borderRadius: "12px",
              height: "35px",
              width: "35px",
            }}
          />
          <Typography ml={2}>{currentPickedGroupName.groupName}</Typography>
        </Stack>
      )}
    </>
  );
};

export default ChatWithDisplayer;
