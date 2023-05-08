import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import {
  ButtonGroup,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import List from "@mui/material/List";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { changeAvatarColor } from "../../../actions/userActions/changeAvatarColor";
import { displaySettings } from "../../../actions/displaySettingsActions/displaySettings";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoggedInUser = ({ loggedUserId, users }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);
  const [colorToChange, setColorToChange] = React.useState(
    filteredLoggedUser.avatarColor
  );

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const displayFirstLetterOfUsername = () => {
    const charArr = [...filteredLoggedUser.userName];
    return charArr[0].toUpperCase();
  };

  const setColor = (e) => {
    const color = e.target.name;
    setColorToChange(color);
  };

  //SettingsModal

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Stack
        justifyContent={"flex-start"}
        alignItems={"center"}
        sx={{
          minHeight: "150px",
          background: "#002F6D",
          pt: "5px",
          pb: "15px",
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"} pt={3}>
          <Badge badgeContent=" " overlap="circular">
            <Avatar
              sx={{
                bgcolor: filteredLoggedUser.avatarColor,
                width: 56,
                height: 56,
                border: "2px solid white",
              }}
            >
              {displayFirstLetterOfUsername()}
            </Avatar>
          </Badge>
          <Button
            variant="text"
            size="large"
            disableElevation
            onClick={handleClick}
            endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            sx={{
              color: "white",
              textTransform: "none",
              fontSize: "22px",
              pb: "0",
            }}
          >
            {filteredLoggedUser.userName}
          </Button>
        </Stack>
        <Collapse in={open} sx={{ width: "100%" }}>
          <List sx={{ color: "white", pt: "3px", pb: "0px" }}>
            <ListItemButton onClick={() => dispatch(displaySettings(true))}>
              {/* <ListItemButton onClick={handleOpenModal}> */}
              <ListItemText primary={"Settings"} sx={{ textAlign: "center" }} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary={"Log out"}
                onClick={() => {
                  navigate("/");
                  dispatch(pickGroup(1));
                }}
                sx={{ textAlign: "center" }}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </Stack>

      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              mb={4}
              textAlign={"center"}
            >
              SETTINGS
            </Typography>
            <Divider />
            <Box mt={4}>
              <Stack
                justifyContent={"space-between"}
                alignContent={"center"}
                spacing={3}
                mb={5}
              >
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  textAlign={"center"}
                >
                  Set avatar color:
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar sx={{ bgcolor: colorToChange, alignItems: "center" }}>
                    {displayFirstLetterOfUsername()}
                  </Avatar>
                </Box>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mb={5}
                >
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined primary button group"
                  >
                    <Button name="red" size="small" onClick={setColor}>
                      Red
                    </Button>
                    <Button name="grey" size="small" onClick={setColor}>
                      Grey
                    </Button>
                    <Button name="green" size="small" onClick={setColor}>
                      Green
                    </Button>
                    <Button name="orange" size="small" onClick={setColor}>
                      Orange
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Stack>
              <Divider />
              <Box mt={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(changeAvatarColor(loggedUserId, colorToChange));
                    setOpenModal(false);
                  }}
                >
                  Confirm Changes
                </Button>
              </Box>
            </Box>

            <CloseIcon
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 17,
                right: 20,
              }}
            />
          </Box>
        </Fade>
      </Modal> */}
    </>
  );
};

export default LoggedInUser;
