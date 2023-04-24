export const usersReducer = (
  state = [
    {
      userName: "admin01",
      password: "admin",
      role: "ADMIN",
    },
    {
      userName: "user01",
      password: "user",
      role: "USER",
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
