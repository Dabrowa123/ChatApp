import ChatGroup from "./ChatGroup";
import { useSelector } from "react-redux";

const ChatGroupList = () => {
  const displayUsers = useSelector((state) => state.users);
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const filteredUser = displayUsers.filter(
    (user) => user.userId === loggedUser
  );
  const isAdmin = filteredUser[0].isAdmin;
  const displayGroups = useSelector((state) => state.chatGroups);
  const groups = displayGroups.map((group) => {
    if (isAdmin) {
      return <ChatGroup key={group.groupId} {...group} />;
    } else if (!isAdmin && !group.isPriv) {
      return <ChatGroup key={group.groupId} {...group} />;
    }
  });

  return groups;
};

export default ChatGroupList;
