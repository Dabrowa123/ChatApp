import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../actions/messageAction/sendMessage";

const MessageSender = () => {
  const displayGroups = useSelector((state) => state.chatGroups);
  let today = new Date();
  const currentTime = () => {
    let hours = () => {
      if (today.getHours() > 9) {
        return today.getHours();
      } else {
        return "0" + today.getHours();
      }
    };

    let minutes = () => {
      if (today.getMinutes() > 9) {
        return today.getMinutes();
      } else {
        return "0" + today.getMinutes();
      }
    };

    let seconds = () => {
      if (today.getSeconds() > 9) {
        return today.getSeconds();
      } else {
        return "0" + today.getSeconds();
      }
    };

    return hours() + ":" + minutes() + ":" + seconds();
  };

  const dispatch = useDispatch();
  const [messageContent, setMessageContent] = useState("");

  const onEditHandler = (e) => {
    setMessageContent(e.target.value);
  };

  const send = () => {
    const messageObject = {
      groupId: 1,
      author: "Dominik",
      time: currentTime(),
      content: messageContent,
    };

    console.log("sended");
    dispatch(sendMessage(messageObject));
    console.log(displayGroups);
    setMessageContent("");
  };
  return (
    <Grid container style={{ padding: "20px" }}>
      <Grid item xs={11}>
        <TextField
          id="outlined-basic-email"
          label="Type something"
          value={messageContent}
          onChange={onEditHandler}
          fullWidth
        />
      </Grid>
      <Grid xs={1} align="right">
        <Fab color="primary" aria-label="add" onClick={send}>
          <SendIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default MessageSender;
