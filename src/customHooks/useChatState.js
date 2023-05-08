import { useSelector } from "react-redux";

const useChatState = () => {
  const currentGroupId = useSelector((state) => state.currentGroup.groupId);
  const groups = useSelector((state) => state.chatGroups);
  const currentPickedUser = useSelector((state) => state.currentPickedUser);
  const users = useSelector((state) => state.users);
  const loggedUserId = useSelector((state) => state.isLogged.userId);
  const searchUserItem = useSelector((state) => state.searchUser);
  const searchGroupItem = useSelector((state) => state.searchGroup);

  return {
    currentGroupId,
    groups,
    currentPickedUser,
    users,
    loggedUserId,
    searchUserItem,
    searchGroupItem,
  };
};

export default useChatState;
