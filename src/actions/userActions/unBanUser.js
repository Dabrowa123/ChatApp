export const unBanUser = (id) => {
  return {
    type: "UNBAN_USER",
    payload: id,
  };
};
