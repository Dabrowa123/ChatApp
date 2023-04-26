export const usersReducer = (
  state = [
    {
      userId: 1,
      userName: "admin01",
      password: "admin",
      isAdmin: true,
    },
    {
      userId: 2,
      userName: "user01",
      password: "user",
      isAdmin: false,
    },
    {
      userId: 3,
      userName: "user02",
      password: "user",
      isAdmin: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case "REGISTER_USER":
      return [...state, action.payload];
    case "DELETE_USER":
      return state.filter((user) => user.userId !== action.payload);
    case "EDIT_USER":
      return [
        state.map((user) => {
          if (user.id !== action.payload.id) {
            return user;
          }

          const { userName, password, isAdmin } = action.payload;

          return {
            userId: user.userId,
            userName,
            password,
            isAdmin,
          };
        }),
      ];
    default:
      return state;
  }
};
