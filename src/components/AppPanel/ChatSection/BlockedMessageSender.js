import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";

const BlockedMessageSender = () => {
  return (
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
export default BlockedMessageSender;
