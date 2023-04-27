export const currentGroupReducer = (state = { groupId: 1 }, action) => {
  switch (action.type) {
    case "PICK_GROUP":
      return { ...state, groupId: action.payload };
    default:
      return state;
  }
};
