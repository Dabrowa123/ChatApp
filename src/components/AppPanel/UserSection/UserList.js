import User from "./User";

const UserList = ({ users, groups, loggedUserId, searchUserItem }) => {
  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchUserItem.toLowerCase())
  );

  const toDisplayUsers = filteredUsers.map((user) => {
    if (user.userId !== loggedUserId) {
      return (
        <User
          key={Math.floor(Math.random() * 12345)}
          {...user}
          users={users}
          groups={groups}
          loggedUserId={loggedUserId}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      {toDisplayUsers.length !== 0 ? (
        toDisplayUsers
      ) : (
        <p>Not found any matching user!</p>
      )}
    </div>
  );
};

export default UserList;
