import { useSelector } from "react-redux";
import User from "./User";
import { useNavigate } from "react-router";

const AdminPanel = () => {
  const navigate = useNavigate();
  const displayUsers = useSelector((state) => state.users);
  console.log(displayUsers);
  const users = displayUsers.map((user) => (
    <User key={user.userId} {...user} />
  ));

  return (
    <div>
      {users}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Przejdź do logowania
      </button>
    </div>
  );
};

export default AdminPanel;
