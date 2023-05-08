import ChatGroup from "./ChatGroup";
import { useSelector } from "react-redux";
import ChatSearch from "./ChatSearch";
import ChatGroupCreator from "./ChatGroupCreator";
import Box from "@mui/material/Box";

const ChatGroupList = () => {
  const displayUsers = useSelector((state) => state.users);
  const displayGroups = useSelector((state) => state.chatGroups);
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const searchItem = useSelector((state) => state.searchGroup);

  const filteredUser = displayUsers.filter(
    (user) => user.userId === loggedUser
  );
  const isAdmin = filteredUser[0].isAdmin;

  const filteredGroups = displayGroups.filter((group) =>
    group.groupName.toLowerCase().includes(searchItem.toLowerCase())
  );

  const toDisplayGroups = filteredGroups.map((group) => {
    if (isAdmin) {
      return <ChatGroup key={group.groupId} {...group} />;
    } else if (!isAdmin && !group.isPriv) {
      return <ChatGroup key={group.groupId} {...group} />;
    }
  });

  return (
    <div>
      {filteredGroups.length !== 0 ? (
        toDisplayGroups
      ) : (
        <p style={{ color: "white" }}>Not found any matching group!</p>
      )}
    </div>
  );
};

export default ChatGroupList;
