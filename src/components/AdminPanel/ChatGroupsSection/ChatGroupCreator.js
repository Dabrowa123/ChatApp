import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGroup } from "../../../actions/groupActions/createGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
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
    <Box mt={3}>
    <form onSubmit={createRoom}>
      <Box component="div" display={"flex"}>
        <Paper
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%" }}
        >
          <InputBase
          name="groupName"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Add a group"
            inputProps={{ 'aria-label': 'Add a group' }}
            value={groupNameValue}
            onChange={onEditHandle}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="directions">
            <AddCircleIcon />
          </IconButton>
        </Paper>
      </Box>
    </form>
      
    </Box>
  );
};

export default ChatGroupCreator;
