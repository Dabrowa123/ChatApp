import * as React from "react";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Message = ({ author, time, content }) => {
  const userId = useSelector((state) => state.isLogged.userId);
  // console.log(userId);
  const users = useSelector((state) => state.users);
  // console.log(users.length);
  let loggedUser;

  if (userId !== 0) {
    const filteredUser = users.filter((user) => user.userId === userId);
    if (filteredUser.length !== 0) {
      loggedUser = filteredUser[0].userName;
    }
  }

  // Clicking the message to show 'remove'
  const handleClickMessage = () => {
    setIsmesageClicked(!isMessageClicked);
  };

  const [isMessageClicked, setIsmesageClicked] = React.useState(false);
  const [showRemoveIcon, setShowRemoveIcon] = React.useState("none");

  React.useEffect(() => {
    if (isMessageClicked) {
      setShowRemoveIcon("visible");
    } else {
      setShowRemoveIcon("none");
    }
  }, [isMessageClicked]);

  let message =
    loggedUser !== author ? (
      <ListItem>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
            }}
          >
            <Chip
              // label={content}
              label={
                <Typography style={{ whiteSpace: "normal" }}>
                  {content}
                </Typography>
              }
              variant="filled"
              color="primary"
              sx={{
                height: "auto",
                maxWidth: "60%",
                fontSize: "16px",
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <ListItemText
              align="right"
              secondary={`${author} ${time}`}
            ></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    ) : (
      <ListItem key="2">
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "right",
              justifyContent: "left",
            }}
          >
            <Chip
              label={
                <Typography style={{ whiteSpace: "normal" }}>
                  {content}
                </Typography>
              }
              variant="outlined"
              color="primary"
              sx={{
                height: "auto",
                maxWidth: "60%",
                fontSize: "16px",
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                },
              }}
              onClick={handleClickMessage}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              // sx={{ visibility: `${showRemoveIcon}` }}
              sx={{ visibility: "none" }}
            >
              <HighlightOffIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <ListItemText align="left" secondary={`Me ${time}`}></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    );
  return message;
};

export default Message;
