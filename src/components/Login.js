import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const displayUsers = useSelector((state) => state.users);
  const displayIsLogged = useSelector((state) => state.isLogged);
  console.log(displayIsLogged);

  const users = displayUsers.map((user) => (
    <ul>
      <li>{user.userName}</li>
    </ul>
  ));

  const dispatch = useDispatch();

  console.log(displayUsers);
  return (<div>
            <div>{users}</div>
            <div>{displayIsLogged.userId}</div>
            {/* below login button */}
            {/* <button onClick={() => dispatch()}>login admin01</button> */}
          </div>);
};

export default Login;
