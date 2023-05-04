import { useSelector } from "react-redux";
import User from "./User";

const UserList = () => {
  const displayUsers = useSelector((state) => state.users);
  const currentUserId = useSelector((state) => state.isLogged.userId);
  const calculateBrightness = (color) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    return (r * 299 + g * 587 + b * 114) / 1000 / 255;
  };

  const generateRandomColor = () => {
    const minBrightness = 0.2; // minimalna jasność koloru
    let color;

    // pętla generująca kolor o odpowiedniej jasności
    do {
      color = Math.floor(Math.random() * 16777215).toString(16); // generuje kolor w formacie hex
    } while (calculateBrightness(color) < minBrightness);

    return "#" + color; // zwraca kolor w formacie #RRGGBB
  };

  const users = displayUsers.map((user) => {
    console.log(currentUserId);
    if (user.userId !== currentUserId) {
      return (
        <User
          key={Math.floor(Math.random() * 12345)}
          color={generateRandomColor()}
          {...user}
        />
      );
    } else {
      return null;
    }
  });
  console.log(users);
  return users;
};

export default UserList;
