import Stack from "@mui/material/Stack";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Typography } from "@mui/material";

const ChatGroupLogo = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      spacing={1}
      sx={{ minHeight: "150px" }}
    >
      <QuestionAnswerIcon
        sx={{ color: "white", minWidth: "100px", minHeight: "120px" }}
      />
      <Stack pt={2} sx={{ color: "white" }}>
        <Typography
          variant="h4"
          textAlign={"left"}
          sx={{ font: " bold 40px/40px Georgia, serif" }}
        >
          NOVO
        </Typography>
        <Typography
          variant="h5"
          textAlign={"left"}
          sx={{ font: "bold 32px/35px Georgia, serif" }}
        >
          CHAT
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ChatGroupLogo;
