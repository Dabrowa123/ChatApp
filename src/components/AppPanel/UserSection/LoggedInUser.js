import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LoggedInUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.isLogged.userId);
  const users = useSelector((state) => state.users);
  let loggedUser;
  let userColor;

  if (userId !== 0) {
    const filteredUser = users.filter((user) => user.userId === userId);
    if (filteredUser.length !== 0) {
      loggedUser = filteredUser[0].userName;
    }

    userColor = filteredUser[0].avatarColor;
  }

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
  return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{
          minHeight: "150px",
          maxHeight: "150px",
          background: "#eceff1",
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
            sx={{ color: "black", textTransform: "none", fontSize: "22px" }}
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
            <MenuItem disableRipple>Settings</MenuItem>
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

  );
};

export default LoggedInUser;
