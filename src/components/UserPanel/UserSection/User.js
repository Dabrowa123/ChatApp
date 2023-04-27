import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { createPrivGroup } from "../../../actions/groupActions/createPrivGroup";
import { pickUser } from "../../../actions/userActions/pickUser";

const User = ({ userId, userName }) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.isLogged);
  const currentPickedUser = userId;

  const createOrSelectPrivChat = () => {
    console.log(userId);
    const userIdList = [loggedUser, currentPickedUser];
    dispatch(createPrivGroup(userIdList));
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
