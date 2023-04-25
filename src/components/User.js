const User = ({ userName, password, isAdmin }) => {
  return (
    <li>
      <p>Username: {userName}</p>
      <p>Password: {password}</p>
      <p>Is admin: {isAdmin ? "YES" : "NO"}</p>
    </li>
  );
};

export default User;
