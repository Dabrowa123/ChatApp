export const registerUser = ({ userName, email, password }) => {
  // function generateRandomColor() {
  //   const minBrightness = 0.2; // minimalna jasność koloru
  //   let color;

  //   // pętla generująca kolor o odpowiedniej jasności
  //   do {
  //     color = Math.floor(Math.random() * 16777215).toString(16); // generuje kolor w formacie hex
  //   } while (calculateBrightness(color) < minBrightness);

  //   return "#" + color; // zwraca kolor w formacie #RRGGBB
  // }

  // // funkcja obliczająca jasność koloru w skali od 0 (czarny) do 1 (biały)
  // function calculateBrightness(color) {
  //   const hex = color.replace("#", "");
  //   const r = parseInt(hex.substr(0, 2), 16);
  //   const g = parseInt(hex.substr(2, 2), 16);
  //   const b = parseInt(hex.substr(4, 2), 16);

  //   return (r * 299 + g * 587 + b * 114) / 1000 / 255;
  // }
  return {
    type: "REGISTER_USER",
    payload: {
      userId: Math.floor(Math.random() * 1234),
      userName,
      email,
      password,
      avatarColor: "orange",
      isAdmin: false,
      isBanned: false,
    },
  };
};
