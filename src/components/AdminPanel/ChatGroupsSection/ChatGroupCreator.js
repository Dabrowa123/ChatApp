import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGroup } from "../../../actions/groupActions/createGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ChatGroupCreator = () => {
  const dispatch = useDispatch();
  const [groupNameValue, setGroupNameValue] = useState("");

  const onEditHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "groupName") {
      setGroupNameValue(value);
    }
  };

  const createRoom = (e) => {
    e.preventDefault();
    dispatch(createGroup(groupNameValue));
    setGroupNameValue("");
  };
  return (
    <Box>
      {/* <Box sx={{ minWidth: "100%", bgcolor: "white" }}> */}
      <Box onSubmit={createRoom} component="form" display={"flex"}>
        {/* Name
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Username"
          name="username"
          autoComplete="Name"
          autoFocus
          value={usernameValue}
          onChange={onEditHandle}
        /> */}
        <Typography variant="h6" textAlign={"left"} mt={2} mb={2} ml={0}>
          CREATE ROOM
        </Typography>
        {/* <Typography variant="h6">Create Chat Group</Typography> */}
        <TextField
          margin="normal"
          autoFocus
          required
          type="text"
          name="groupName"
          label="Group Name"
          value={groupNameValue}
          onChange={onEditHandle}
          // sx={{ bgcolor: "white" }}
        ></TextField>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddCircleIcon />
        </IconButton>
        {/* <button>
          <AddCircleIcon />
        </button> */}
      </Box>
    </Box>
  );
};

export default ChatGroupCreator;
