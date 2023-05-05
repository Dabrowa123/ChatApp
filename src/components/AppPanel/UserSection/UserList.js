import { useSelector } from "react-redux";
import { useState } from "react";
import User from "./User";
import UserSearch from "./UserSearch";

const UserList = () => {
  const displayUsers = useSelector((state) => state.users);
  const currentUserId = useSelector((state) => state.isLogged.userId);
  const [searchItem, setSearchItem] = useState("");

  const filteredUsers = displayUsers.filter((user) =>
    user.userName.toLowerCase().includes(searchItem.toLowerCase())
  );

  const toDisplayUsers = filteredUsers.map((user) => {
    if (user.userId !== currentUserId) {
      return <User key={Math.floor(Math.random() * 12345)} {...user} />;
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
      <UserSearch onSearch={setSearchItem} />
    </div>
  );
};

export default UserList;
