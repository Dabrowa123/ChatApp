export const isLoggedReducer = (
  state = { userId: 0 },
  action
) => {
  switch (action.type) {
    default:
      console.warn(`Nie mamy akcji typu: ${action.type}`);
      return state;
  }
};
