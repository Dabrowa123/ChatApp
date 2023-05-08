export const usersReducer = (
  state = [
    {
      userId: 1,
      userName: "Administrator",
      password: "admin",
      avatarColor: "grey",
      isAdmin: true,
      isBanned: false,
    },
    {
      userId: 2,
      userName: "Dominik",
      password: "user",
      avatarColor: "green",
      isAdmin: false,
      isBanned: false,
    },
    {
      userId: 3,
      userName: "Szymon",
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
      return [
        state.map((user) => {
          if (user.userId !== action.payload.id) {
            return user;
          }

          const { userName, password, isAdmin } = action.payload;

          return {
            userId: user.userId,
            userName,
            password,
            isAdmin,
            avatarColor: user.avatarColor,
          };
        }),
      ];
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
