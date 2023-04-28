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
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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

  const createOrSelectPrivChat = () => {
    if (filteredGroup.length === 0) {
      const userIdList = [loggedUser, currentPickedUser];
      dispatch(createPrivGroup(userIdList));
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
        <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="directions">
            <HighlightOffIcon />
          </IconButton>
      </ListItemButton>
    </Typography>
  );
};

export default User;
