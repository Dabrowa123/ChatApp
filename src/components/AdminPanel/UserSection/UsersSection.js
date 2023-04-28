import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { lightBlue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";
import { pickGroup } from "../../../actions/groupActions/pickGroup";

const UsersSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.isLogged.userId);
  const users = useSelector((state) => state.users);
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
        width: "25vw",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{
          minHeight: "190px",
          background: "#eceff1",
        }}
      >
        <Stack
                justifyContent={"center"}
                alignItems={"center"}
                // direction={"row"}
                spacing={1}
        >
          <Badge color="success" badgeContent=" " overlap="circular">
            <Avatar sx={{ bgcolor: lightBlue[500], width: 56, height: 56 }}>
              OP
            </Avatar>
          </Badge>
          <Typography variant="h5">{loggedUser}</Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            background: "#eceff1",
          }}
        >
          <Paper>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={() => {
                navigate("/");
                dispatch(pickGroup(1));
              }}
            >
              Log Out
            </Button>
          </Paper>
        </Box>
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
