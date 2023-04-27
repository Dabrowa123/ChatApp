import ChatGroup from "./ChatGroup";
import { useSelector } from "react-redux";

const ChatGroupList = () => {
  const displayGroups = useSelector((state) => state.chatGroups);
  const groups = displayGroups.map((group) => (
    <ChatGroup key={group.groupId} {...group} />
  ));

  return groups;
};

export default ChatGroupList;
