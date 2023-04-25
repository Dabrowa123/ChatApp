import Container from "@mui/material/Container";
import RoomsSection from "./Sections/RoomsSection";
import ChatSection from "./Sections/ChatSection";
import UsersSection from "./Sections/UsersSection";
import Stack from "@mui/material/Stack";

const UserPanel = () => {
  return (
    // <Container maxWidth="false">
    <Stack direction="row">
      <RoomsSection></RoomsSection>
      <ChatSection></ChatSection>
      <UsersSection></UsersSection>
    </Stack>
    // </Container>
  );
};

export default UserPanel;
