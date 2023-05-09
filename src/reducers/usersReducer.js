export const usersReducer = (
  state = [
    {
      userId: 1,
      userName: "Administrator",
      email: "admin@gmail.com",
      password: "admin",
      avatarColor: "grey",
      isAdmin: true,
      isBanned: false,
    },
    {
      userId: 2,
      userName: "Dominik",
      email: "dominik@gmail.com",
      password: "user",
      avatarColor: "green",
      isAdmin: false,
      isBanned: false,
    },
    {
      userId: 3,
      userName: "Szymon",
      email: "szymon@gmail.com",
      password: "user",
      avatarColor: "orange",
      isAdmin: false,
      isBanned: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case "REGISTER_USER":
      return [...state, action.payload];
    case "BAN_USER":
      return state.map((user) => {
        if (user.userId !== action.payload) {
          return user;
        }
        return {
          ...user,
          isBanned: true,
        };
      });
    case "UNBAN_USER":
      return state.map((user) => {
        if (user.userId !== action.payload) {
          return user;
        }
        return {
          ...user,
          isBanned: false,
        };
      });
    case "EDIT_USER":
      return state.map((user) => {
        if (user.userId !== action.payload.id) {
          return user;
        }

        return {
          ...user,
          email: action.payload.email,
        };
      });
    case "CHANGE_AVATAR_COLOR":
      return state.map((user) => {
        if (user.userId !== action.payload.id) {
          return user;
        }
        return {
          ...user,
          avatarColor: action.payload.avatarColor,
        };
      });

    default:
      return state;
  }
};
