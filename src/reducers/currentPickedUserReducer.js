export const currentPickedUserReducer = (state = { userId: null }, action) => {
  switch (action.type) {
    case "PICK_USER":
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};
