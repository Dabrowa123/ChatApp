import ChatGroupSection from "./ChatGroupsSection/ChatGroupSection";
import ChatSection from "./ChatSection/ChatSection";
import UsersSection from "./UserSection/UsersSection";
import Stack from "@mui/material/Stack";

const AppPanel = () => {
  return (
    <Stack direction="row">
      <ChatGroupSection></ChatGroupSection>
      <ChatSection></ChatSection>
      <UsersSection></UsersSection>
    </Stack>
  );
};

export default AppPanel;
