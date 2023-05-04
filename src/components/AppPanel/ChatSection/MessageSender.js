import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../actions/messageAction/sendMessage";
import { wulgaryzmy } from "../../../wulgaryzmy";
import Filter from "bad-words";

const MessageSender = () => {
  const dispatch = useDispatch();
  const filter = new Filter();
  const [messageContent, setMessageContent] = useState("");
  const currentGroupId = useSelector((state) => state.currentGroup.groupId);
  const userId = useSelector((state) => state.isLogged.userId);
  // console.log(userId);
  const users = useSelector((state) => state.users);
  // console.log(users.length);
  let loggedUser;
  filter.addWords(...wulgaryzmy);

  if (userId !== 0) {
    const filteredUser = users.filter((user) => user.userId === userId);
    if (filteredUser.length !== 0) {
      loggedUser = filteredUser[0].userName;
    }
  }
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

  const onEditHandler = (e) => {
    setMessageContent(e.target.value);
  };

  const send = (e) => {
    console.log(currentGroupId);

    if (messageContent !== "") {
      const messageObject = {
        groupId: currentGroupId,
        author: loggedUser,
        time: currentTime(),
        content: filter.clean(messageContent),
      };

      console.log("sended");
      dispatch(sendMessage(messageObject));
      setMessageContent("");
    }
  };

  return (
    <Grid container style={{ padding: "20px" }}>
      <Grid item xs={11}>
        <TextField
          id="outlined-basic-email"
          label="Type something"
          value={messageContent}
          onChange={onEditHandler}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              send();
            }
          }}
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
