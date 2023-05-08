import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import HeadingBar from "./HeadingBar";

const SettingsSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "50vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeadingBar />
      <Divider />
    </Box>
  );
};

export default SettingsSection;
