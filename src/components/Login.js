import React from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const displayUsers = useSelector((state) => state.users);
  const displayIsLogged = useSelector((state) => state.isLogged);
  console.log(displayIsLogged);

  const users = displayUsers.map((user) => (
    <ul>
      <li>{user.userName}</li>
    </ul>
  ));

  console.log(displayUsers);
  return (<div>
            <div>{users}</div>
            <div>{displayIsLogged.userId}</div>
          </div>);
};

export default Login;
