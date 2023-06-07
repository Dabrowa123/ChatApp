import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import { deleteGroup } from "../../../actions/groupActions/deleteGroup";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { displaySettings } from "../../../actions/displaySettingsActions/displaySettings";

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

const ChatGroup = ({
  groupId,
  groupName,
  currentGroupId,
  users,
  loggedUserId,
}) => {
  const filteredUser = users.find((user) => user.userId === loggedUserId);
  const dispatch = useDispatch();

  //RemoveGroupModal

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography variant="h1" fontSize="large" sx={{ color: "white" }}>
        <ListItemButton>
          <Stack
            direction={"row"}
            onClick={() => {
              dispatch(pickGroup(groupId));
              dispatch(displaySettings(false));
            }}
            width={"100%"}
            alignItems={"center"}
            pl={1}
          >
            <ListItemIcon>
              <GroupsRoundedIcon
                sx={{
                  color: "#002F6D",
                  background: "white",
                  padding: "5px",
                  borderRadius: "12px",
                  height: "35px",
                  width: "35px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary={groupName} />
          </Stack>
          {filteredUser.admin && !(groupId === 1) && (
            <IconButton
              type="submit"
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
              onClick={handleOpen}
            >
              <HighlightOffIcon sx={{ color: "white" }} />
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
              Are you sure you want to remove this group?
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                sx={{ mt: 2 }}
                onClick={() => {
                  if (currentGroupId === groupId) {
                    dispatch(pickGroup(1));
                    dispatch(deleteGroup(groupId));
                  } else {
                    dispatch(deleteGroup(groupId));
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

export default ChatGroup;
