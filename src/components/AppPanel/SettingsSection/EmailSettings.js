import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { changeAvatarColor } from "../../../actions/userActions/changeAvatarColor";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import useChatState from "../../../customHooks/useChatState";
import { displaySettings } from "../../../actions/displaySettingsActions/displaySettings";

const EmailSettings = (props) => {
  const { users, loggedUserId } =
    useChatState();

    const dispatch = useDispatch();
  
    const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);
  
    const [colorToChange, setColorToChange] = React.useState(filteredLoggedUser.avatarColor);
  
    const displayFirstLetterOfUsername = () => {
      const charArr = [...filteredLoggedUser.userName];
      return charArr[0].toUpperCase();
    };

    const setColor = (e) => {
      const color = e.target.name;
      setColorToChange(color);
      props.func(color);
    };

  return (
            <Box mt={4}>
              <Stack
                minWidth={"100%"}
                justifyContent={"space-between"}
                alignContent={"center"}
                spacing={3}
                mb={5}
              >
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  textAlign={"center"}
                >
                  Change email adress:
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  textAlign={"center"}
                >
                  {filteredLoggedUser.email}
                </Typography>
 
                </Box>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mb={5}
                >
   
                </Stack>
              </Stack>
              <Divider />
            </Box>
  );
};

export default EmailSettings;
