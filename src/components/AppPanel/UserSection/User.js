import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { createPrivGroup } from "../../../actions/groupActions/createPrivGroup";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { deleteUser } from "../../../actions/userActions/deleteUser";
import { pickUser } from "../../../actions/userActions/pickUser";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const User = ({ userId, userName, avatarColor }) => {
  const dispatch = useDispatch();
  const displayUsers = useSelector((state) => state.users);
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const currentPickedUser = userId;
  const filteredUser = displayUsers.filter(
    (user) => user.userId === loggedUser
  );
  const isAdmin = filteredUser[0].isAdmin;
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) =>
      group.userIdList.includes(loggedUser) &&
      group.userIdList.includes(currentPickedUser)
  );

  const users = useSelector((state) => state.users);

  const currentPickedUserFilter = users.filter(
    (user) => user.userId === currentPickedUser
  );

  const currentLoggedUserFilter = users.filter(
    (user) => user.userId === loggedUser
  );

  const createOrSelectPrivChat = () => {
    if (filteredGroup.length === 0) {
      const userIdList = [loggedUser, currentPickedUser];
      const id = Math.floor(Math.random() * 1234);
      dispatch(
        createPrivGroup(
          id,
          userIdList,
          currentLoggedUserFilter[0].userName,
          currentPickedUserFilter[0].userName
        )
      );
      dispatch(pickGroup(id));
      dispatch(pickUser(userId));
    } else if (currentPickedUser === loggedUser) {
      alert("Nie możesz pisać z samym sobą :(");
    } else {
      dispatch(pickGroup(filteredGroup[0].groupId));
      dispatch(pickUser(userId));
    }
  };

  const displayFirstLetterOfUsername = () => {
    const charArr = [...userName];
    return charArr[0].toUpperCase();
  };

  //RemoveUserModal

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography variant="h1" fontSize="large" pl={1}>
        <ListItemButton>
          <Stack
            direction={"row"}
            onClick={createOrSelectPrivChat}
            width={"100%"}
            alignItems={"center"}
          >
            <ListItemIcon>
              <Badge
                color="info"
                badgeContent=" "
                overlap="circular"
                variant="dot"
              >
                <Avatar sx={{ bgcolor: avatarColor }}>
                  {displayFirstLetterOfUsername()}
                </Avatar>
              </Badge>
            </ListItemIcon>
            <ListItemText primary={userName} />
          </Stack>
          {isAdmin && (
            <IconButton
              type="submit"
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
              onClick={handleOpen}
            >
              <HighlightOffIcon sx={{ color: "#002F6D" }} />
            </IconButton>
          )}
        </ListItemButton>
      </Typography>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              textAlign={"center"}
            >
              Are you sure you want to remove this user?
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                sx={{ mt: 2 }}
                onClick={() => {
                  if (loggedUser === userId) {
                    alert("Nie możesz usunąć samego siebie!");
                  } else {
                    dispatch(deleteUser(userId));
                  }
                }}
              >
                Yes
              </Button>
              <Button sx={{ mt: 2 }} onClick={handleClose}>
                No
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default User;
