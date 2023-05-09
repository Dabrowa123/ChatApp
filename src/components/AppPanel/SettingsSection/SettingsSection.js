import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import HeadingBar from "./HeadingBar";
import AvatarSettings from "./AvatarSettings";
import Button from "@mui/material/Button";
import { useState } from "react";
import { displaySettings } from "../../../actions/displaySettingsActions/displaySettings";
import { changeAvatarColor } from "../../../actions/userActions/changeAvatarColor";
import { useDispatch } from "react-redux";
import useChatState from "../../../customHooks/useChatState";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import {editUser} from "../../../actions/userActions/editUser"

const SettingsSection = () => {

  // Avatar 


  const [color, setColor] = useState("");
  const [enableConfirm, setEnableConfirm] = useState(false);

  let avatarData = (color) => {
    setEnableConfirm(true);
    setColor(color);
  };

  // Email

  const { users, loggedUserId } =
  useChatState();

  const existingUsers = useSelector((state) => state.users);

  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);

  const RegisterSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email()
      .test(
        "Unique Email",
        "Email already in use, please choose another one",
        function (value) {
          const doesEmailExist = existingUsers.filter(
            (user) => user.email === value
          );
          if (doesEmailExist.length > 0) {
            return false;
          } else {
            return true;
          }
        }
      ),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: `${filteredLoggedUser.email}`,
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(editUser(loggedUserId, values.email));
      dispatch(changeAvatarColor(loggedUserId, color))
      dispatch(displaySettings(false));
    },
  });

  return (
    <Box
    component="form"
    onSubmit={formik.handleSubmit}
      noValidate
      sx={{
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "50vw",
      }}
    >
      <HeadingBar />
      <Divider />
      <Box
        sx={{
          minWidth: "100%", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center"}}
      >
        <Box
          sx={{minWidth: "90%", maxWidth: "90%"}}
        >
          <AvatarSettings func={avatarData}/>

        <Box spacing={3}
                mb={5}
                sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
              >
                <Typography
                  id="transition-modal-title"
                  variant="subtitle1"
                  component="h2"
                  mt={4}
                  mb={2}
                  textAlign={"left"}
                >
                  Change email adress:
                </Typography>
                <Box sx={{ minWidth: "70%" }} component="form">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="Email"
                    autoFocus
                    value={formik.values.email}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setEnableConfirm(true);
                    }}
                    error={
                      formik.touched.email && Boolean(formik.errors.email)
                    }
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>
              </Box>
              <Divider />
        </Box>
      </Box>

      <Box mt={5} mr={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
        {enableConfirm ? 
          (<Button
            variant="contained"
            type="submit"
            size="small"
          >
            Confirm Changes
          </Button>) : (<Button
            variant="contained"
            size="small"
            disabled
          >
            Confirm Changes
          </Button>)
        }
      </Box>
    </Box>
  );
};

export default SettingsSection;
