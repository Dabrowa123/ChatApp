import Box from "@mui/material/Box";
import Room from "./Room";

const RoomsSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #36EAEF, #1565c0)",
        height: "100vh",
        width: "25vw",
      }}
    >
      <Room/>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
    </Box>
  );
};

export default RoomsSection;
