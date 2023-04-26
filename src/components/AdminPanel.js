import { useNavigate } from "react-router";
import RoomsSection from "./Sections/ChatGroupsSection/RoomsSection";
import ChatSection from "./Sections/ChatSection/ChatSection";
import UsersSection from "./Sections/UserSection/UsersSection";
import Stack from "@mui/material/Stack";

// const AdminPanel = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Przejdź do logowania
//       </button>
//       <div>
//         <h1>Users</h1>
//         <UserList />
//         <h1>Groups</h1>
//         <ChatGroupList />
//
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

const AdminPanel = () => {
  const navigate = useNavigate();
  return (
    // <Container maxWidth="false">
    <Stack direction="row">
      <RoomsSection></RoomsSection>
      <ChatSection></ChatSection>
      <UsersSection></UsersSection>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div>
    </Stack>
    // </Container>
  );
};

export default AdminPanel;
