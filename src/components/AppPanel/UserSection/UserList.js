import { useSelector } from "react-redux";
import User from "./User";

const UserList = () => {
  const displayUsers = useSelector((state) => state.users);
  const currentUserId = useSelector((state) => state.isLogged.userId);

  const users = displayUsers.map((user) => {
    if (user.userId !== currentUserId) {
      return <User key={Math.floor(Math.random() * 12345)} {...user} />;
    } else {
      return null;
    }
  });
  return users;
};

export default UserList;
