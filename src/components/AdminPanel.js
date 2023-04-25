import { useSelector } from "react-redux";
import User from "./User";
import { useNavigate } from "react-router";
import ChatGroupList from "./ChatGroupList";

const AdminPanel = () => {
  const navigate = useNavigate();
  const displayUsers = useSelector((state) => state.users);
  const users = displayUsers.map((user) => (
    <User key={user.userId} {...user} />
  ));
  return (
    <div>
      <div>
        <h1>Users</h1>
        {users}
        <h1>Groups</h1>
        <ChatGroupList />
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Przejdź do logowania
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
