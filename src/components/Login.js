import React, { useState, useSyncExternalStore } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { InputLabel, Input, Button } from "@mui/material";

const Login = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const displayIsLogged = useSelector((state) => state.isLogged);
  console.log(displayIsLogged);

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
    if (usernameValue === "admin01" || passwordValue === "admin") {
      window.location.replace("http://localhost:3000/adminPanel");
    }
    console.log("zalogowano albo nie");
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
    </div>
  );
};

export default Login;
