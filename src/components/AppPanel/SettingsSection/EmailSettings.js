import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import useChatState from "../../../customHooks/useChatState";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const EmailSettings = ({ formik, setFunction }) => {
  const { users, loggedUserId } = useChatState();

  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);

  return (
    <Box sx={{ minWidth: "90%", maxWidth: "90%" }}>
      <Box
        spacing={3}
        mb={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
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
            fullWidth
            id="email"
            label="New email"
            name="email"
            autoComplete="Email"
            autoFocus
            value={formik.values.email}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onChange={(e) => {
              e.preventDefault();
              formik.handleChange(e);
              setFunction(true);
            }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>

        <Typography
          id="transition-modal-title"
          variant="subtitle2"
          component="h2"
          mt={1}
          mb={2}
          textAlign={"left"}
        >
          Currently used email: {filteredLoggedUser.email}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default EmailSettings;
