import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const useChatState = () => {
  // const [groups, setGroups] = useState([]);

  const currentGroupId = useSelector((state) => state.currentGroup.groupId);
  const groups = useSelector((state) => state.chatGroups);
  const currentPickedUser = useSelector((state) => state.currentPickedUser);
  const users = useSelector((state) => state.users.users);
  const loggedUserId = useSelector((state) => state.isLogged.userId);
  const searchUserItem = useSelector((state) => state.searchUser);
  const searchGroupItem = useSelector((state) => state.searchGroup);

  // useEffect(() => {
  //   const fetchGroups = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8082/groups");
  //       setGroups(response.data);
  //     } catch (error) {
  //       console.log("Błąd połączenia");
  //     }
  //   };
  //   fetchGroups();
  // }, [loggedUserId]);

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
