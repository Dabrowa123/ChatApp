import ChatGroupSection from "./ChatGroupsSection/ChatGroupSection";
import ChatSection from "./ChatSection/ChatSection";
import UsersSection from "./UserSection/UsersSection";
import Stack from "@mui/material/Stack";
import SettingsSection from "./SettingsSection/SettingsSection";
import { useSelector } from "react-redux";

const AppPanel = () => {
  const displaySettings = useSelector((state) => state.displaySettings);

  return (
    <Stack direction="row">
      <ChatGroupSection></ChatGroupSection>
      {!displaySettings && <ChatSection></ChatSection>}
      {displaySettings && <SettingsSection></SettingsSection>}
      <UsersSection></UsersSection>
    </Stack>
  );
};

export default AppPanel;
