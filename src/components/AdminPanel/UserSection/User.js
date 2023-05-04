import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { createPrivGroup } from "../../../actions/groupActions/createPrivGroup";
import { pickGroup } from "../../../actions/groupActions/pickGroup";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { deleteUser } from "../../../actions/userActions/deleteUser";

const User = ({ userId, userName }) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.isLogged.userId);
  const currentPickedUser = userId;
  const displayGroups = useSelector((state) => state.chatGroups);
  const filteredGroup = displayGroups.filter(
    (group) =>
      group.userIdList.includes(loggedUser) &&
      group.userIdList.includes(currentPickedUser)
  );
  const users = useSelector((state) => state.users);

  const currentPickedUserFilter = users.filter(
    (user) => user.userId === currentPickedUser
  );

  const currentLoggedUserFilter = users.filter(
    (user) => user.userId === loggedUser
  );

  const createOrSelectPrivChat = () => {
    console.log(userId === currentPickedUser);
    if (filteredGroup.length === 0) {
      const userIdList = [loggedUser, currentPickedUser];
      const id = Math.floor(Math.random() * 1234);
      dispatch(
        createPrivGroup(
          id,
          userIdList,
          currentLoggedUserFilter[0].userName,
          currentPickedUserFilter[0].userName
        )
      );
      dispatch(pickGroup(id));
    } else if (currentPickedUser === loggedUser) {
      alert("Nie możesz pisać z samym sobą :(");
    } else {
      console.log(filteredGroup[0].groupId);
      dispatch(pickGroup(filteredGroup[0].groupId));
    }
  };

  const displayFirstLetterOfUsername = () => {
    const charArr = [...userName];
    console.log(charArr);
    return charArr[0].toUpperCase();
  };

  function generateRandomColor() {
    const minBrightness = 0.2; // minimalna jasność koloru
    let color;

    // pętla generująca kolor o odpowiedniej jasności
    do {
      color = Math.floor(Math.random() * 16777215).toString(16); // generuje kolor w formacie hex
    } while (calculateBrightness(color) < minBrightness);

    return "#" + color; // zwraca kolor w formacie #RRGGBB
  }

  // funkcja obliczająca jasność koloru w skali od 0 (czarny) do 1 (biały)
  function calculateBrightness(color) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    return (r * 299 + g * 587 + b * 114) / 1000 / 255;
  }
  return (
    <Typography variant="h1" fontSize="large">
      <ListItemButton>
        <Stack
          direction={"row"}
          onClick={createOrSelectPrivChat}
          width={"100%"}
          alignItems={"center"}
        >
          <ListItemIcon>
            <Badge
              color="info"
              badgeContent=" "
              overlap="circular"
              variant="dot"
            >
              <Avatar sx={{ bgcolor: generateRandomColor() }}>
                {displayFirstLetterOfUsername()}
              </Avatar>
            </Badge>
          </ListItemIcon>
          <ListItemText primary={userName} onClick={createOrSelectPrivChat} />
        </Stack>
        <IconButton
          type="submit"
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={() => {
            if (loggedUser === userId) {
              alert("Nie możesz usunąć samego siebie!");
            } else {
              console.log("USUWANIE");
              dispatch(deleteUser(userId));
            }
          }}
        >
          <HighlightOffIcon />
        </IconButton>
      </ListItemButton>
    </Typography>
  );
};

export default User;
