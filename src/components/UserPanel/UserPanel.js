import RoomsSection from "./ChatGroupsSection/RoomsSection";
import ChatSection from "./ChatSection/ChatSection";
import UsersSection from "./UserSection/UsersSection";
import Stack from "@mui/material/Stack";

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
