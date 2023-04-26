export const registerUser = ({ userName, password }) => {
  return {
    type: "REGISTER_USER",
    payload: {
      userId: Math.floor(Math.random() * 1234),
      userName,
      password,
      isAdmin: false,
    },
  };
};
