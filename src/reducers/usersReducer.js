export const usersReducer = (
  state = {
    users: [], // Pusta tablica na początku
    isLoading: true,
  },
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
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
