import React from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const displayUsers = useSelector((state) => state);

  const users = displayUsers.map((user) => (
    <ul>
      <li>{user.userName}</li>
    </ul>
  ));

  console.log(displayUsers);
  return <div>{users}</div>;
};

export default Login;
