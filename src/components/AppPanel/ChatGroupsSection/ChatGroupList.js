import ChatGroup from "./ChatGroup";

const ChatGroupList = ({
  users,
  groups,
  loggedUserId,
  searchGroupItem,
  currentGroupId,
}) => {
  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);

  const filteredGroups = groups.filter((group) =>
    group.groupName.toLowerCase().includes(searchGroupItem.toLowerCase())
  );

  const toDisplayGroups = filteredGroups.map((group) => {
    if (filteredLoggedUser.isAdmin) {
      return (
        <ChatGroup
          key={group.groupId}
          {...group}
          currentGroupId={currentGroupId}
          users={users}
          loggedUserId={loggedUserId}
        />
      );
    } else if (!filteredLoggedUser.isAdmin && !group.isPriv) {
      return (
        <ChatGroup
          key={group.groupId}
          {...group}
          currentGroupId={currentGroupId}
          users={users}
          loggedUserId={loggedUserId}
        />
      );
    } else {
      return null;
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
