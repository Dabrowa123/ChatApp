import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { lightBlue } from "@mui/material/colors";
import { useSelector } from "react-redux";
import UserList from "./UserList";

const UsersSection = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.isLogged.userId);
  // console.log(userId);
  const users = useSelector((state) => state.users);
  // console.log(users.length);
  let loggedUser;

  if (userId !== 0) {
    const filteredUser = users.filter((user) => user.userId === userId);
    if (filteredUser.length !== 0) {
      loggedUser = filteredUser[0].userName;
    }
  }
  return (
    <Box
      sx={{
        height: "100vh",
        width: "20vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          height: "70px",
          width: "100%",
        }}
      >
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            navigate("/");
          }}
          sx={{ marginRight: "25px" }}
        >
          Log Out
        </Button>
      </Box>
      <Divider />
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        spacing={2}
        sx={{
          minHeight: "100px",
          background: "#eceff1",
        }}
      >
        <Badge color="success" badgeContent=" " overlap="circular">
          <Avatar sx={{ bgcolor: lightBlue[500], width: 56, height: 56 }}>
            OP
          </Avatar>
        </Badge>
        <Typography variant="h5">{loggedUser}</Typography>
      </Stack>
      <Divider />
      <Stack sx={{ padding: "10px" }}>
        <Stack mb={2} ml={3}>
          <Typography variant="h6" textAlign={"left"} mt={2} ml={1}>
            USERS
          </Typography>
        </Stack>
        <UserList />
      </Stack>
    </Box>
  );
};

export default UsersSection;
