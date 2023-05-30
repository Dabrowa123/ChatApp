import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { createPrivGroup } from "../../../actions/groupActions/createPrivGroup";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import IconButton from "@mui/material/IconButton";
import { banUser } from "../../../actions/userActions/banUser";
import { pickUser } from "../../../actions/userActions/pickUser";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { unBanUser } from "../../../actions/userActions/unBanUser";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { displaySettings } from "../../../actions/displaySettingsActions/displaySettings";
import axios from "axios";
import { fetchGroupsDataRequest } from "../../../actions/groupActions/fetchGroupsDataActions";

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

const User = ({
  userId,
  userName,
  avatarColor,
  groups,
  users,
  loggedUserId,
}) => {
  const dispatch = useDispatch();
  const currentPickedUserId = userId;
  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);
  const filteredGroup = groups.filter(
    (group) =>
      group.users.includes(loggedUserId) &&
      group.users.includes(currentPickedUserId)
  );

  const currentPickedUserFilter = users.find(
    (user) => user.userId === currentPickedUserId
  );

  const currentLoggedUserFilter = users.find(
    (user) => user.userId === loggedUserId
  );

  const createOrSelectPrivChat = (e) => {
    e.preventDefault();
    if (filteredGroup.length === 0) {
      const userIdList = [loggedUserId, currentPickedUserId];
      axios
        .post("http://localhost:8082/groups", {
          groupName: `Priv group of ${currentPickedUserFilter.userName} and ${currentLoggedUserFilter.userName}`,
          users: userIdList,
          messages: [],
          priv: true,
        })
        .then((response) => {
          dispatch(fetchGroupsDataRequest());
          console.log("groups in USER: " + groups);
          dispatch(pickGroup(response.data.groupId));
          dispatch(pickUser(userId));
          dispatch(displaySettings(false));
          console.log("Groups " + groups);
        })
        .catch((error) => {
          console.log("Błąd podczas tworzenia grupy");
        });
    } else {
      dispatch(pickGroup(filteredGroup[0].groupId));
      dispatch(pickUser(userId));
      dispatch(displaySettings(false));
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
            <ListItemText
              primary={
                currentPickedUserFilter.isBanned ? (
                  <>
                    <span style={{ color: "grey" }}>
                      {userName} <i style={{ fontSize: "80%" }}>(banned)</i>
                    </span>
                  </>
                ) : (
                  userName
                )
              }
            />
          </Stack>
          {filteredLoggedUser.isAdmin && (
            <IconButton
              type="submit"
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
              onClick={handleOpen}
            >
              {currentPickedUserFilter.isBanned ? (
                <PersonAddAlt1Icon
                  sx={{
                    color: "#263238",
                    height: "22px",
                    width: "22px",
                    "&:hover": {
                      color: "#4caf50",
                    },
                  }}
                />
              ) : (
                <PersonRemoveIcon
                  sx={{
                    color: "#263238",
                    height: "22px",
                    width: "22px",
                    "&:hover": {
                      color: "#ef5350",
                    },
                  }}
                />
              )}
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
              {currentPickedUserFilter.isBanned ? (
                <p>Are you sure you want to unban this user?</p>
              ) : (
                <p>Are you sure you want to ban this user?</p>
              )}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                sx={{ mt: 2 }}
                onClick={() => {
                  if (currentPickedUserFilter.isBanned) {
                    dispatch(unBanUser(userId));
                  } else {
                    dispatch(banUser(userId));
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
