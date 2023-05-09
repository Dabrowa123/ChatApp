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
import { useFormik } from "formik";
import * as yup from "yup";
import { editUser } from "../../../actions/userActions/editUser";
import EmailSettings from "./EmailSettings";

const SettingsSection = () => {
  const { users, loggedUserId } = useChatState();

  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);

  // Avatar

  const [color, setColor] = useState(filteredLoggedUser.avatarColor);
  const [enableConfirm, setEnableConfirm] = useState(false);

  let avatarData = (color) => {
    setEnableConfirm(true);
    setColor(color);
  };

  // Email

  const RegisterSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please, write any valid email")
      .email()
      .test(
        "Unique Email",
        "Email already in use, please choose another one",
        function (value) {
          const doesEmailExist = users.filter((user) => user.email === value);
          if (value === filteredLoggedUser.email) {
            return true;
          } else if (doesEmailExist.length > 0) {
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
      if (color !== filteredLoggedUser.avatarColor) {
        dispatch(changeAvatarColor(loggedUserId, color));
      } else {
        dispatch(
          changeAvatarColor(loggedUserId, filteredLoggedUser.avatarColor)
        );
      }
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
          alignItems: "center",
        }}
      >
        <Box sx={{ minWidth: "90%", maxWidth: "90%" }}>
          <AvatarSettings
            func={avatarData}
            users={users}
            loggedUserId={loggedUserId}
          />

          <EmailSettings formik={formik} setFunction={setEnableConfirm} />
        </Box>
      </Box>

      <Box mt={5} mr={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
        {enableConfirm ? (
          <Button variant="contained" type="submit" size="small">
            Confirm Changes
          </Button>
        ) : (
          <Button variant="contained" size="small" disabled>
            Confirm Changes
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SettingsSection;
