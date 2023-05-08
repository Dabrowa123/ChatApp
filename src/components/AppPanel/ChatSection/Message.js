import * as React from "react";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { deleteMessage } from "../../../actions/messageAction/deleteMessage";

const Message = ({
  groupId,
  id,
  author,
  time,
  content,
  isDeleted,
  loggedUserId,
  users,
}) => {
  const dispatch = useDispatch();
  let loggedUserName;

  if (loggedUserId !== 0) {
    const filteredUser = users.filter((user) => user.userId === loggedUserId);
    if (filteredUser.length !== 0) {
      loggedUserName = filteredUser[0].userName;
    }
  }

  const filteredUserForAdmin = users.filter(
    (user) => user.userId === loggedUserId
  );
  const isAdmin = filteredUserForAdmin[0].isAdmin;

  const filteredMessageAuthor = users.filter(
    (user) => user.userName === author
  );

  const filteredAuthorAvatarColor = filteredMessageAuthor[0].avatarColor;
  const [authorAvatarColor, setAuthorAvatarColor] = React.useState(
    filteredAuthorAvatarColor
  );

  console.log("Author avatar color: " + authorAvatarColor);

  // Clicking the message to show 'remove'
  const handleClickMessage = () => {
    setIsmesageClicked(!isMessageClicked);
  };

  const [isMessageClicked, setIsmesageClicked] = React.useState(false);
  const [showRemoveIcon, setShowRemoveIcon] = React.useState("none");
  const [letUserClickMessage, setLetUserClickMessage] = React.useState("none");

  React.useEffect(() => {
    if (isMessageClicked) {
      setShowRemoveIcon("visible");
    } else {
      setShowRemoveIcon("none");
    }
    if (isAdmin) {
      setLetUserClickMessage("initial");
    } else {
      setLetUserClickMessage("none");
    }
  }, [isMessageClicked]);

  const displayFirstLetterOfUsername = (userName) => {
    const charArr = [...userName];
    return charArr[0].toUpperCase();
  };

  let message =
    loggedUserName !== author ? (
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
            {!isDeleted && (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ display: `${showRemoveIcon}`, padding: "0" }}
                onClick={() => {
                  dispatch(deleteMessage(groupId, id));
                }}
              >
                <HighlightOffIcon sx={{ width: "15px", height: "15px" }} />
              </IconButton>
            )}

            <Chip
              label={
                <Typography style={{ whiteSpace: "normal" }}>
                  {content}
                </Typography>
              }
              variant="filled"
              color="primary"
              sx={
                !isDeleted
                  ? {
                      height: "24px",
                      maxWidth: "60%",
                      marginLeft: "5px",
                      fontSize: "16px",
                      pointerEvents: `${letUserClickMessage}`,
                      "& .MuiChip-label": {
                        display: "block",
                        whiteSpace: "normal",
                      },
                    }
                  : {
                      color: "grey",
                      border: "1px solid grey",
                      background: "transparent",
                      fontStyle: "italic",
                      pointerEvents: "none",
                      height: "24px",
                      maxWidth: "60%",
                      fontSize: "16px",
                      "& .MuiChip-label": {
                        display: "block",
                        whiteSpace: "normal",
                      },
                    }
              }
              onClick={handleClickMessage}
            />
            <Avatar
              sx={{
                bgcolor: authorAvatarColor,
                width: 20,
                height: 20,
                fontSize: "12px",
                ml: "5px",
                mt: "2px",
              }}
            >
              {displayFirstLetterOfUsername(author)}
            </Avatar>
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
              sx={
                !isDeleted
                  ? {
                      height: "24px",
                      maxWidth: "60%",
                      marginRight: "5px",
                      fontSize: "16px",
                      "& .MuiChip-label": {
                        display: "block",
                        whiteSpace: "normal",
                      },
                    }
                  : {
                      color: "grey",
                      border: "1px solid grey",
                      background: "transparent",
                      fontStyle: "italic",
                      pointerEvents: "none",
                      height: "24px",
                      maxWidth: "60%",
                      fontSize: "16px",
                      "& .MuiChip-label": {
                        display: "block",
                        whiteSpace: "normal",
                      },
                    }
              }
              onClick={handleClickMessage}
            />
            {!isDeleted && (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ display: `${showRemoveIcon}`, padding: "0" }}
                onClick={() => {
                  dispatch(deleteMessage(groupId, id));
                }}
              >
                <HighlightOffIcon sx={{ width: "15px", height: "15px" }} />
              </IconButton>
            )}
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
