import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/userActions/deleteUser";
import { useSelector } from "react-redux";
const User = ({ userId, userName, password, isAdmin }) => {
  const currentUserId = useSelector((state) => state.isLogged.userId);
  const dispatch = useDispatch();

  const deleteCurrentUser = (e) => {
    e.preventDefault();
    if (userId !== currentUserId) {
      dispatch(deleteUser(userId));
    } else {
      alert("Nie możesz usunąć samego siebie!");
    }
  };

  return (
    <div>
      <p>Username: {userName}</p>
      <p>Password: {password}</p>
      <p>Is admin: {isAdmin ? "YES" : "NO"}</p>
      <button onClick={deleteCurrentUser}>USUŃ</button>
    </div>
  );
};

export default User;
