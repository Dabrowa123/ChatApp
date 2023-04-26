import Box from "@mui/material/Box";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Room = () => {
  return (
    <Box
      sx={{
        // background: "linear-gradient(to bottom, #36EAEF, #1565c0)",
        height: "100px",
        width: "100%",
        // border: "solid"
      }}
    >
      <Stack direction={"row"}>
        <GroupsRoundedIcon 
            fontSize="large" 
            color="info"
            sx={{background: "InfoBackground", padding: "5px"}}
            
        />
        <Typography>Room Name</Typography>
      </Stack>
    </Box>
  );
};

export default Room;
