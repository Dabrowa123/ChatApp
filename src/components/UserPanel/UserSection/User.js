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
  const currentGroupId = useSelector((state) => state.currentGroup.groupId);
  const filteredGroup = displayGroups.filter(
    (group) =>
      group.userIdList.includes(loggedUser) &&
      group.userIdList.includes(currentPickedUser)
  );

  const createOrSelectPrivChat = () => {
    if (filteredGroup.length === 0) {
      const userIdList = [loggedUser, currentPickedUser];
      dispatch(createPrivGroup(userIdList));
    } else {
      console.log(filteredGroup[0].groupId);
      // alert("Istnieje już taka konwersacja!");
      dispatch(pickGroup(filteredGroup[0].groupId));
      console.log(currentGroupId);
      console.log(filteredGroup);
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
