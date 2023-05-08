import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import {
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
import { displaySettings } from "../../../actions/displaySettingsActions/displaySettings";

const LoggedInUser = ({ loggedUserId, users }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const displayFirstLetterOfUsername = () => {
    const charArr = [...filteredLoggedUser.userName];
    return charArr[0].toUpperCase();
  };

  return (
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
  );
};

export default LoggedInUser;
