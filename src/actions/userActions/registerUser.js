import axios from "axios";

export const registerUser = ({ userName, email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8082/users", {
        userName,
        email,
        password,
        avatarColor: "orange",
        isAdmin: false,
        isBanned: false,
      });

      dispatch({
        type: "FETCH_DATA_REQUEST",
      });
    } catch (error) {
      console.log("Błąd dodawania użytkownika", error);
    }
  };
};

// export const registerUser = ({ userName, email, password }) => {
//   return {
//     type: "REGISTER_USER",
//     payload: {
//       userId: Math.floor(Math.random() * 1234),
//       userName,
//       email,
//       password,
//       avatarColor: "orange",
//       isAdmin: false,
//       isBanned: false,
//     },
//   };
// };
