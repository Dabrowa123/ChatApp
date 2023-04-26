import { useSelector } from "react-redux";
import User from "./User";

const UserList = () => {
  const displayUsers = useSelector((state) => state.users);
  const users = displayUsers.map((user) => (
    <User key={Math.floor(Math.random() * 12345)} {...user} />
  ));
  console.log(users);
  return users;
};

export default UserList;
