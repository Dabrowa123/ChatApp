import Container from "@mui/material/Container";
import RoomsSection from "./Sections/RoomsSection";
import ChatSection from "./Sections/ChatSection";
import UsersSection from "./Sections/UsersSection";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router";

const UserPanel = () => {
  // const navigate = useNavigate();
  return (
    // <Container maxWidth="false">
    <Stack direction="row">
      <RoomsSection></RoomsSection>
      <ChatSection></ChatSection>
      <UsersSection></UsersSection>
      {/* <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div> */}
    </Stack>
    // </Container>
  );
};

export default UserPanel;
