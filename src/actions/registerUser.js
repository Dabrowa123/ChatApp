export const registerUser = ({ userName, password }) => {
  return {
    type: "REGISTER_USER",
    payload: {
      id: Math.floor(Math.random() * 1234),
      userName,
      password,
      isAdmin: false,
    },
  };
};
