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
import { logInUser } from "../actions/userActions/logInUser";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { fetchUserDataSuccess } from "../actions/userActions/fetchUserDataActions";
import { fetchUserDataFailure } from "../actions/userActions/fetchUserDataActions";
import { fetchGroupsDataRequest } from "../actions/groupActions/fetchGroupsDataActions";
import { pickGroup } from "../actions/groupActions/pickGroup";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginDataCheck, setLoginDataCheck] = useState({
    isWrong: false,
    message: "",
  });
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.users);

  const authenticate = () => {
    const filteredUser = users.filter(
      (user) => user.userName === usernameValue
    );

    if (filteredUser.length !== 0) {
      if (
        usernameValue === filteredUser[0].userName &&
        passwordValue === filteredUser[0].password &&
        filteredUser[0].isAdmin
      ) {
        navigate("/appPanel");
      } else if (
        usernameValue === filteredUser[0].userName &&
        passwordValue === filteredUser[0].password &&
        !filteredUser[0].isAdmin
      ) {
        dispatch(fetchGroupsDataRequest());
        dispatch(pickGroup("8b8dd1e7-394d-4757-9e42-018e6f8ad7f4"));
        navigate("/appPanel");
      } else {
        setLoginDataCheck({
          isWrong: true,
          message: "Wrong password",
        });
      }
      dispatch(logInUser(filteredUser[0].userId));
    } else {
      setLoginDataCheck({
        isWrong: true,
        message: "Wrong username",
      });
    }
  };

  const toRegister = () => {
    navigate("/register");
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/users");
        console.log(response);
        dispatch(fetchUserDataSuccess(response.data));
        console.log(users);
      } catch (error) {
        console.log("Błąd połączenia");
        dispatch(fetchUserDataFailure(error.message));
      }
    };

    if (isLoading) {
      fetchData();
    }
  }, [dispatch]);

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
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
            error={loginDataCheck.isWrong}
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
            error={loginDataCheck.isWrong}
            helperText={loginDataCheck.message}
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
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs={5} sx={{ textAlign: "left" }}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs={5.3} sx={{ textAlign: "right" }}>
              Don't have an account?
            </Grid>
            <Grid item xs={1.7} sx={{ textAlign: "right" }}>
              <Link onClick={toRegister} variant="body2">
                {"Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
