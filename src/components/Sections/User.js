import ListItemButton from "@mui/material/ListItemButton";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { deepOrange, deepPurple } from "@mui/material/colors";

const User = () => {
  return (
    <Typography variant="h1" fontSize="large">
      <ListItemButton>
        <ListItemIcon>
          <Badge color="info" badgeContent=" " overlap="circular" variant="dot">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </Badge>
        </ListItemIcon>

        <ListItemText primary={"User Name"} />
      </ListItemButton>
    </Typography>
  );
};

export default User;
