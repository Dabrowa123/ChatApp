import ListItemButton from "@mui/material/ListItemButton";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import { deleteGroup } from "../../../actions/groupActions/deleteGroup";

const ChatGroup = ({ groupId, groupName, userIdList, messages }) => {
  const currentPickedGroup = useSelector((state) => state.currentGroup.groupId);
  const displayUsers = useSelector((state) => state.users);
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const filteredUser = displayUsers.filter(
    (user) => user.userId === loggedUser
  );
  const isAdmin = filteredUser[0].isAdmin;
  const dispatch = useDispatch();

  return (
    <Typography variant="h1" fontSize="large">
      <ListItemButton>
        <Stack
          direction={"row"}
          onClick={() => {
            dispatch(pickGroup(groupId));
          }}
          width={"100%"}
          alignItems={"center"}
        >
          <ListItemIcon>
            <GroupsRoundedIcon
              color="primary"
              sx={{
                background: "InfoBackground",
                padding: "5px",
                borderRadius: "12px",
              }}
            />
          </ListItemIcon>
          <ListItemText primary={groupName} />
        </Stack>
        {isAdmin && (
          <IconButton
            type="submit"
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={() => {
              if (groupId === 1) {
                alert("Nie możesz usunąć głównej grupy!");
              } else {
                if (currentPickedGroup === groupId) {
                  dispatch(pickGroup(1));
                  dispatch(deleteGroup(groupId));
                } else {
                  dispatch(deleteGroup(groupId));
                }
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

export default ChatGroup;
