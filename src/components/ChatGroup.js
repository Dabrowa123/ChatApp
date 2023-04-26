import Message from "./Message";
import { useSelector } from "react-redux";
import ListItemButton from "@mui/material/ListItemButton";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const ChatGroup = ({ groupId, groupName, userIdList, messages }) => {
  // Tutaj jest przygotowana metoda wyświetlająca wiadomości. Po ukończeniu ChatSection, zostanie tam przeniesiona :).
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) => group.groupId === groupId
  );
  const messageList = filteredGroup[0].messages.map((message) => (
    <Message key={message.id} {...message} />
  ));
  // return (
  //   <li>
  //     <p>Name: {groupName}</p>
  //     <p>Users: {userIdList.length}</p>
  //     <p>Messages: </p>
  //     {messageList}
  //   </li>
  // );

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
      </ListItemButton>
    </Typography>
  );
};

export default ChatGroup;
