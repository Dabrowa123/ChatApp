import ListItemButton from "@mui/material/ListItemButton";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";
import { pickGroup } from "../../../actions/groupActions/pickGroup";

const ChatGroup = ({ groupId, groupName, userIdList, messages }) => {
  const dispatch = useDispatch();

  return (
    <Typography variant="h1" fontSize="large">
      <ListItemButton
        onClick={() => {
          dispatch(pickGroup(groupId));
        }}
      >
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
        <IconButton
          type="submit"
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
        >
          <HighlightOffIcon />
        </IconButton>
        {/* <JoinGroupButton /> */}
      </ListItemButton>
    </Typography>
  );
};

export default ChatGroup;
