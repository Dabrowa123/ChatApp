import { useSelector } from "react-redux";

const AdminPanel = () => {
  const displayUsers = useSelector((state) => state.users);

  const users = displayUsers.map((user) => (
    <ul>
      <li>Username: {user.userName}</li>
      <li>Password: {user.password}</li>
      <li>Is admin: {user.isAdmin ? <p>YES</p> : <p>NO</p>}</li>
    </ul>
  ));

  return <div>{users}</div>;
};

export default AdminPanel;
