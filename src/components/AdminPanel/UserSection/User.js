import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { createPrivGroup } from "../../../actions/groupActions/createPrivGroup";
import { pickGroup } from "../../../actions/groupActions/pickGroup";

const User = ({ userId, userName }) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const currentPickedUser = userId;
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
    console.log(userId === currentPickedUser);
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
    } else if (currentPickedUser === loggedUser) {
      alert("Nie możesz pisać z samym sobą :(");
    } else {
      console.log(filteredGroup[0].groupId);
      dispatch(pickGroup(filteredGroup[0].groupId));
    }
  };

  return (
    <Typography variant="h1" fontSize="large">
      <ListItemButton onClick={createOrSelectPrivChat}>
        <ListItemIcon>
          <Badge color="info" badgeContent=" " overlap="circular" variant="dot">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </Badge>
        </ListItemIcon>
        <ListItemText primary={userName} />
      </ListItemButton>
    </Typography>
  );
};

export default User;
