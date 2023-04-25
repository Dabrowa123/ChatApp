import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { registerUser } from "../actions/registerUser";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [password2Value, setPassword2Value] = useState("");

  const register = () => {
    if (
      usernameValue !== "" &&
      passwordValue !== "" &&
      password2Value !== "" &&
      passwordValue === password2Value
    ) {
      const userObject = {
        userName: usernameValue,
        password: passwordValue,
      };
      dispatch(registerUser(userObject));
      navigate("/");
      alert("Thank you for registration!");
    } else {
      alert(
        "Coś jest nie tak ale nie wiem co. Nie chciało mi sie na razie tworzyć obsługi błędów :C"
      );
    }
  };

  const onEditHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "username") {
      setUsernameValue(value);
    } else if (name === "password") {
      setPasswordValue(value);
    } else if (name === "password2") {
      setPassword2Value(value);
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    register();
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
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={onHandleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Repeat Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password2Value}
            onChange={onEditHandle}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs={10.5} sx={{ textAlign: "right" }}>
              Do you already have an account?
            </Grid>
            <Grid item xs={1.5} sx={{ textAlign: "right" }}>
              <Link href="http://localhost:3000/" variant="body2">
                {"Sign in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
