import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { registerUser } from "../actions/userActions/registerUser";
import { Container, Stack } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


const RegisterSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  // .test('Unique Name', 'Name already in use', 
  // function (value) {
  //   const existingUsers = useSelector((state) => state.users.userName);
  //   const doesUserExist = existingUsers.some(userName => userName === value);
  //   console.log(doesUserExist);
  //   return !doesUserExist;
    // return new Promise((resolve, reject) => {
    //   axios.get(`http://localhost:8003/api/u/user/${value}/available`)
    //               .then((res) => {
    //                   resolve(true)
    //               })
    //               .catch((error) => {
    //                   if (error.response.data.content === "Name has already been taken.") {
    //                       resolve(false);
    //                   }
    //               })
    //       })
    //   }
    // ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  password2: yup
    .string()
    .required("Repeat password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      password2: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      const userObject = {
        userName: values.username,
        password: values.password,
      };
      dispatch(registerUser(userObject));
      setIsSubmited(true);
      setTimeout(() => navigate("/"), 2000)
    },
  });

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
          backgroundColor: "white",
        }}
      >
        {isSubmited && 
          <Stack alignItems="center" justifyContent={"center"} spacing={5}>
            <VerifiedUserIcon color="success" fontSize="large"/>
            <Typography variant="h5">Thank you for registration!</Typography>
          </Stack>}
        {!isSubmited && (<><Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
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
            value={formik.values.username}
            onChange={(e) => {
              formik.handleChange(e);
            }}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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
            value={formik.values.password}
            onChange={(e) => {
              formik.handleChange(e);
            }}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Repeat Password"
            type="password"
            id="password2"
            autoComplete="current-password"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            error={formik.touched.password2 && Boolean(formik.errors.password2)}
            helperText={formik.touched.password2 && formik.errors.password2}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
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
        </Box></>)}
      </Box>
    </Container>
  );
};

export default Register;
