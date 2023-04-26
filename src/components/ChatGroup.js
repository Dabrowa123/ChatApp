import Message from "./Message";
import { useSelector } from "react-redux";
import ListItemButton from "@mui/material/ListItemButton";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import JoinGroupButton from "./JoinGroupButton";

const ChatGroup = ({ groupId, groupName, userIdList, messages }) => {
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
        <ListItemText primary={groupName} />
        <JoinGroupButton />
      </ListItemButton>
    </Typography>
  );
};

export default ChatGroup;
