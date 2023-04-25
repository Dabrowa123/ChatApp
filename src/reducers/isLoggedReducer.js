export const isLoggedReducer = (
  state = { userId: 0 },
  action
) => {
  switch (action.type) {
    case "LOG_IN_USER":
      // return { ...state, action.payload };
    default:
      console.warn(`Nie mamy akcji typu: ${action.type}`);
      return state;
  }
};
