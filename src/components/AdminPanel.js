import { useSelector } from "react-redux";

const AdminPanel = () => {
  const displayUsers = useSelector((state) => state);

  const users = displayUsers.map((user) => (
    <ul>
      <li>{user.userName}</li>
    </ul>
  ));

  return <div>{users}</div>;
};

export default AdminPanel;
