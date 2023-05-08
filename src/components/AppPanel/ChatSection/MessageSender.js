import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../actions/messageAction/sendMessage";
import { wulgaryzmy } from "../../../wulgaryzmy";
import Filter from "bad-words";

const MessageSender = ({ currentGroupId, loggedUserId, users }) => {
  const dispatch = useDispatch();
  const [messageContent, setMessageContent] = useState("");

  const filter = new Filter();
  filter.addWords(...wulgaryzmy);

  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);

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

    return (
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear() +
      " " +
      hours() +
      ":" +
      minutes() +
      ":" +
      seconds()
    );
  };

  const onEditHandler = (e) => {
    setMessageContent(e.target.value);
  };

  const send = (e) => {
    if (messageContent !== "") {
      let toSend;
      try {
        toSend = filter.clean(messageContent);
      } catch {
        toSend = messageContent;
      }

      const messageObject = {
        groupId: currentGroupId,
        author: filteredLoggedUser.userName,
        time: currentTime(),
        content: toSend,
      };

      dispatch(sendMessage(messageObject));
      setMessageContent("");
    }
  };

  return !filteredLoggedUser.isBanned ? (
    <Grid container style={{ padding: "20px" }}>
      <Grid item xs={10.8} sx={{ bgcolor: "white" }}>
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
      <Grid xs={1.2} align="right">
        <Fab aria-label="add" onClick={send} color={"primary"}>
          <SendIcon />
        </Fab>
      </Grid>
    </Grid>
  ) : (
    <Grid container style={{ padding: "20px" }}>
      <Grid item xs={10.8} sx={{ bgcolor: "white" }}>
        <TextField
          disabled
          id="outlined-basic-email"
          label="User banned by administrator - Unable to send messages "
          fullWidth
        />
      </Grid>
      <Grid xs={1.2} align="right">
        <Fab aria-label="add" color={"default"} sx={{ cursor: "not-allowed" }}>
          <SendIcon sx={{ color: "white" }} />
        </Fab>
      </Grid>
    </Grid>
  );
};
export default MessageSender;
