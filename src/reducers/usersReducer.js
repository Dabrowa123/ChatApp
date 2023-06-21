export const usersReducer = (
  state = {
    users: [], // Pusta tablica na początku
    isLoading: true,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_USER_DATA_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_USER_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "FETCH_USER_WEBSOCKET":
      return {
        ...state,
        isLoading: false,
        users: state.users.map((user) => {
          if (user.userName === action.payload.userName) {
            return action.payload;
          }
          return user;
        }),
      };

    case "FETCH_USER_WEBSOCKET_REGISTER":
      return {
        ...state,
        isLoading: false,
        users: [...state.users, action.payload],
      };
    case "FETCH_USER_DATA_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
