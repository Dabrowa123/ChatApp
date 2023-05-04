import RoomsSection from "./ChatGroupsSection/RoomsSection";
import ChatSection from "./ChatSection/ChatSection";
import UsersSection from "./UserSection/UsersSection";
import Stack from "@mui/material/Stack";

const AppPanel = () => {
  return (
    <Stack direction="row">
      <RoomsSection></RoomsSection>
      <ChatSection></ChatSection>
      <UsersSection></UsersSection>
    </Stack>
  );
};

export default AppPanel;
