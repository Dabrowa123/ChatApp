import { Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";

const HeadingBar = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <SettingsIcon sx={{}} />
      <Typography variant="h6" ml={1}>
        SETTINGS
      </Typography>
      <Button></Button>
    </Stack>
  );
};

export default HeadingBar;
