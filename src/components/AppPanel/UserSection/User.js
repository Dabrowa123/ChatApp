import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { createPrivGroup } from "../../../actions/groupActions/createPrivGroup";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { deleteUser } from "../../../actions/userActions/deleteUser";
import { pickUser } from "../../../actions/userActions/pickUser";

const User = ({ userId, userName, avatarColor }) => {
  const dispatch = useDispatch();
  const displayUsers = useSelector((state) => state.users);
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const currentPickedUser = userId;
  const filteredUser = displayUsers.filter(
    (user) => user.userId === loggedUser
  );
  const isAdmin = filteredUser[0].isAdmin;
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) =>
      group.userIdList.includes(loggedUser) &&
      group.userIdList.includes(currentPickedUser)
  );

  const users = useSelector((state) => state.users);

  const currentPickedUserFilter = users.filter(
    (user) => user.userId === currentPickedUser
  );

  const currentLoggedUserFilter = users.filter(
    (user) => user.userId === loggedUser
  );

  const createOrSelectPrivChat = () => {
    if (filteredGroup.length === 0) {
      const userIdList = [loggedUser, currentPickedUser];
      const id = Math.floor(Math.random() * 1234);
      dispatch(
        createPrivGroup(
          id,
          userIdList,
          currentLoggedUserFilter[0].userName,
          currentPickedUserFilter[0].userName
        )
      );
      dispatch(pickGroup(id));
      dispatch(pickUser(userId));
    } else if (currentPickedUser === loggedUser) {
      alert("Nie możesz pisać z samym sobą :(");
    } else {
      dispatch(pickGroup(filteredGroup[0].groupId));
      dispatch(pickUser(userId));
    }
  };

  const displayFirstLetterOfUsername = () => {
    const charArr = [...userName];
    return charArr[0].toUpperCase();
  };

  return (
    <Typography variant="h1" fontSize="large">
      <ListItemButton>
        <Stack
          direction={"row"}
          onClick={createOrSelectPrivChat}
          width={"100%"}
          alignItems={"center"}
        >
          <ListItemIcon>
            <Badge
              color="info"
              badgeContent=" "
              overlap="circular"
              variant="dot"
            >
              <Avatar sx={{ bgcolor: avatarColor }}>
                {displayFirstLetterOfUsername()}
              </Avatar>
            </Badge>
          </ListItemIcon>
          <ListItemText primary={userName} />
        </Stack>
        {isAdmin && (
          <IconButton
            type="submit"
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={() => {
              if (loggedUser === userId) {
                alert("Nie możesz usunąć samego siebie!");
              } else {
                dispatch(deleteUser(userId));
              }
            }}
          >
            <HighlightOffIcon />
          </IconButton>
        )}
      </ListItemButton>
    </Typography>
  );
};

export default User;
