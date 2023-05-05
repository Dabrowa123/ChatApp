import { Search } from "@mui/icons-material";
import ChatGroup from "./ChatGroup";
import { useSelector } from "react-redux";
import ChatSearch from "./ChatSearch";
import { useState } from "react";
import { useEffect } from "react";

const ChatGroupList = () => {
  const displayUsers = useSelector((state) => state.users);
  const displayGroups = useSelector((state) => state.chatGroups);
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const [searchItem, setSearchItem] = useState("");
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

  console.log(filteredGroups);

  return (
    <div>
      {filteredGroups.length !== 0 ? (
        toDisplayGroups
      ) : (
        <p>Not found any matching group!</p>
      )}
      <ChatSearch onSearch={setSearchItem} />
    </div>
  );
};

export default ChatGroupList;
