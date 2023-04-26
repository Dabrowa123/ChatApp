import { useSelector } from "react-redux";
import User from "./User";
import { useNavigate } from "react-router";
import ChatGroupList from "./ChatGroupList";
import UserList from "./UserList";
import ChatGroupCreator from "./ChatGroupCreator";

const AdminPanel = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Przejdź do logowania
      </button>
      <div>
        <h1>Users</h1>
        <UserList />
        <h1>Groups</h1>
        <ChatGroupList />
        <ChatGroupCreator />
      </div>
    </div>
  );
};

export default AdminPanel;
