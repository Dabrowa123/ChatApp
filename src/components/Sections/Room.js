import ListItemButton from "@mui/material/ListItemButton";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const Room = () => {
  return (
    <Typography variant="h1" fontSize="large">
      <ListItemButton>
        <ListItemIcon>
          <GroupsRoundedIcon
            // fontSize="large"
            color="primary"
            sx={{
              background: "InfoBackground",
              padding: "5px",
              borderRadius: "12px",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Room Name" />
      </ListItemButton>
    </Typography>
  );
};

export default Room;
