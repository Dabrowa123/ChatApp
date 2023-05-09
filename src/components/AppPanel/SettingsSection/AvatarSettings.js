import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useChatState from "../../../customHooks/useChatState";

const AvatarSettings = (props) => {
  const { users, loggedUserId } = useChatState();

  const filteredLoggedUser = users.find((user) => user.userId === loggedUserId);

  const [colorToChange, setColorToChange] = React.useState(
    filteredLoggedUser.avatarColor
  );

  const displayFirstLetterOfUsername = () => {
    const charArr = [...filteredLoggedUser.userName];
    return charArr[0].toUpperCase();
  };

  const setColor = (e) => {
    e.preventDefault();
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
          variant="subtitle1"
          component="h2"
          textAlign={"center"}
        >
          Set avatar color:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: colorToChange, alignItems: "center" }}>
            {displayFirstLetterOfUsername()}
          </Avatar>
        </Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={5}
        >
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button name="red" size="small" onClick={setColor}>
              Red
            </Button>
            <Button name="grey" size="small" onClick={setColor}>
              Grey
            </Button>
            <Button name="green" size="small" onClick={setColor}>
              Green
            </Button>
            <Button name="orange" size="small" onClick={setColor}>
              Orange
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
};

export default AvatarSettings;
