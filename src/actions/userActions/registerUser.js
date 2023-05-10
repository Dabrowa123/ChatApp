export const registerUser = ({ userName, email, password }) => {
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
