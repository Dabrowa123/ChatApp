export const searchGroupReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_ITEM":
      return action.payload;

    default:
      return state;
  }
};
