export const banUser = (id) => {
  return {
    type: "BAN_USER",
    payload: id,
  };
};
