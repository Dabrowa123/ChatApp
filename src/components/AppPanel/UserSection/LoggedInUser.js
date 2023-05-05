import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { changeAvatarColor } from "../../../actions/userActions/changeAvatarColor";

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

const LoggedInUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.isLogged.userId);
  const users = useSelector((state) => state.users);
  const currentGroup = useSelector((state) => state.currentGroup.groupId);
  let loggedUser;
  let userColor;

  if (userId !== 0) {
    const filteredUser = users.filter((user) => user.userId === userId);
    if (filteredUser.length !== 0) {
      loggedUser = filteredUser[0].userName;
    }

    userColor = filteredUser[0].avatarColor;
  }

  const [colorToChange, setColorToChange] = React.useState(userColor);

  // Click user name to expand logout button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const displayFirstLetterOfUsername = () => {
    const charArr = [...loggedUser];
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
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{
          minHeight: "150px",
          maxHeight: "150px",
          background: "#002F6D",
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"} pt={3}>
          <Badge badgeContent=" " overlap="circular">
            <Avatar sx={{ bgcolor: userColor, width: 56, height: 56 }}>
              {displayFirstLetterOfUsername()}
            </Avatar>
          </Badge>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="text"
            size="large"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ color: "white", textTransform: "none", fontSize: "22px" }}
          >
            {loggedUser}
          </Button>
          <Menu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem disableRipple onClick={handleOpenModal}>
              Settings
            </MenuItem>
            <MenuItem disableRipple>Calendar</MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/");
                dispatch(pickGroup(1));
              }}
              disableRipple
            >
              Log out
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>

      <Modal
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
                    <Button name="blue" size="small" onClick={setColor}>
                      Blue
                    </Button>
                    <Button name="green" size="small" onClick={setColor}>
                      Green
                    </Button>
                    <Button name="#ffbd59" size="small" onClick={setColor}>
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
                    dispatch(changeAvatarColor(userId, colorToChange));
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
      </Modal>
    </>
  );
};

export default LoggedInUser;
