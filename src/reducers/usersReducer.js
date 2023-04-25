export const usersReducer = (
  state = [
    {
      userId: 1,
      userName: "admin01",
      password: "admin",
      isAdmin: true,
    },
    {
      userId: 2,
      userName: "user01",
      password: "user",
      isAdmin: false,
    },
  ],
  action
) => {
  switch (action.type) {
    default:
      console.warn(`Nie mamy akcji typu ${action.type}`);
      return state;
  }
};
