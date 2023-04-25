import React, { useState, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { InputLabel, Input, Button } from "@mui/material";
import { logInUser } from "../actions/logInUser";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const displayIsLogged = useSelector((state) => state.isLogged);
  const users = useSelector((state) => state.users);
  console.log("Komponent Login: " + displayIsLogged);

  const authenticate = () => {
    const filteredUser = users.filter((user) => user.userName == usernameValue);

    if (filteredUser.length !== 0) {
      if (
        usernameValue === filteredUser[0].userName &&
        passwordValue === filteredUser[0].password &&
        filteredUser[0].isAdmin
      ) {
        navigate("/adminPanel");
      } else if (
        usernameValue === filteredUser[0].userName &&
        passwordValue === filteredUser[0].password &&
        !filteredUser[0].isAdmin
      ) {
        navigate("/userPanel");
      } else {
        alert("Niepoprawny login lub hasło!");
      }
    } else {
      alert("Nie znaleziono takiego użytkownika!");
    }
  };

  const onEditHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "username") {
      setUsernameValue(value);
    } else if (name === "password") {
      setPasswordValue(value);
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    authenticate();
  };

  //

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(logInUser(1));
    navigate("/adminPanel");
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <div>
          <InputLabel htmlFor="my-input">
            <Input
              id="my-input"
              name="username"
              aria-describedby="my-helper-text"
              value={usernameValue}
              onChange={onEditHandle}
            />
          </InputLabel>
        </div>
        <div>
          <InputLabel htmlFor="my-input">
            <Input
              id="my-input"
              name="password"
              aria-describedby="my-helper-text"
              value={passwordValue}
              onChange={onEditHandle}
            />
          </InputLabel>
        </div>
        <button>Zaloguj się</button>
      </form>
      <br />
      <button onClick={handleLogin}>Login Admin01</button>
    </div>
  );
};

export default Login;
