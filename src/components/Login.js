import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { logInUser } from "../actions/logInUser";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const users = useSelector((state) => state.users);

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
      dispatch(logInUser(filteredUser[0].userId));
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
