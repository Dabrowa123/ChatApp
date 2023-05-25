export const currentGroupReducer = (
  state = { groupId: "8b8dd1e7-394d-4757-9e42-018e6f8ad7f4" },
  action
) => {
  switch (action.type) {
    case "PICK_GROUP":
      return { ...state, groupId: action.payload };
    default:
      return state;
  }
};
