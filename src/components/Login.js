import React, { useState, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
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

  return (
    // <div>
    //   <form onSubmit={onHandleSubmit}>
    //     <div>
    //       <InputLabel htmlFor="my-input">
    //         <Input
    //           id="my-input"
    //           name="username"
    //           aria-describedby="my-helper-text"
    //           value={usernameValue}
    //           onChange={onEditHandle}
    //         />
    //       </InputLabel>
    //     </div>
    //     <div>
    //       <InputLabel htmlFor="my-input">
    //         <Input
    //           id="my-input"
    //           name="password"
    //           aria-describedby="my-helper-text"
    //           value={passwordValue}
    //           onChange={onEditHandle}
    //         />
    //       </InputLabel>
    //     </div>
    //     <button>Zaloguj się</button>
    //   </form>
    //   <br />
    //   <button onClick={handleLogin}>Login Admin01</button>
    // </div>
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Name"
            name="username"
            autoComplete="Name"
            autoFocus
            value={usernameValue}
            onChange={onEditHandle}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordValue}
            onChange={onEditHandle}
          />
          <Stack>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Stack>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onHandleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
