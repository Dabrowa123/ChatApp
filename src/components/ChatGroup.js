import Message from "./Message";
import { useSelector } from "react-redux";

const ChatGroup = ({ groupId, groupName, userIdList, messages }) => {
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) => group.groupId === groupId
  );
  const messageList = filteredGroup[0].messages.map((message) => (
    <Message key={message.id} {...message} />
  ));
  return (
    <li>
      <p>Name: {groupName}</p>
      <p>Users: {userIdList.length}</p>
      <p>Messages: </p>
      {messageList}
    </li>
  );
};

export default ChatGroup;
