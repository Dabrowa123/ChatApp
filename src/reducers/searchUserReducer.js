export const searchUserReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_USER_ITEM":
      return action.payload;

    default:
      return state;
  }
};
