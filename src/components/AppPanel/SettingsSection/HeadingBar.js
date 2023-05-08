import { Box, Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import { displaySettings } from "../../../actions/displaySettingsActions/displaySettings";
import { useDispatch } from "react-redux";


const HeadingBar = () => {

  const dispatch = useDispatch();

  return (
    <Box px={3} sx={{maxHeight: "70px", width: "100%", minHeight: "70px", display: "flex", flexDirection:"row", alignItems:"center", justifyContent: "space-between"}}>
      <Stack direction={"row"} alignItems={"center"}>
        <SettingsIcon 
          sx={{
            color: "#263238",
            height: "35px",
            width: "35px",
          }} />
        <Typography ml={2}>
          SETTINGS
        </Typography>
      </Stack>
      <Box>
      <Button
        variant="outlined"
        size="small"
        onClick={() => 
          dispatch(displaySettings(false))}
      >Back to Chat</Button></Box>
    </Box>
  );
};

export default HeadingBar;
