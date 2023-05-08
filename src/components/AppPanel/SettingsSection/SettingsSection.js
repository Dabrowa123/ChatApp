import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import HeadingBar from "./HeadingBar";
import AvatarSettings from "./AvatarSettings";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { displaySettings } from "../../../actions/displaySettingsActions/displaySettings";
import { changeAvatarColor } from "../../../actions/userActions/changeAvatarColor";
import { useDispatch } from "react-redux";
import useChatState from "../../../customHooks/useChatState";
import EmailSettings from "./EmailSettings";

const SettingsSection = () => {
  const { loggedUserId } = useChatState();
  const dispatch = useDispatch();

  const [color, setColor] = useState("");
  const [enableConfirm, setEnableConfirm] = useState(false);

  let avatarData = (color) => {
    setEnableConfirm(true);
    setColor(color);
  };

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "50vw",
      }}
    >
      <HeadingBar />
      <Divider />
      <Box
        sx={{
          minWidth: "100%", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center"}}
      >
        <Box
          sx={{minWidth: "90%", maxWidth: "90%"}}
        >
          <AvatarSettings func={avatarData}/>
          <EmailSettings />
        </Box>
      </Box>

      <Box mt={5} mr={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
        {enableConfirm ? 
          (<Button
            variant="contained"
            size="small"
            onClick={(e) => {
              e.preventDefault();
              dispatch(changeAvatarColor(loggedUserId, color))
              dispatch(displaySettings(false));
            }}
          >
            Confirm Changes
          </Button>) : (<Button
            variant="contained"
            size="small"
            disabled
          >
            Confirm Changes
          </Button>)
        }
      </Box>
    </Box>
  );
};

export default SettingsSection;
