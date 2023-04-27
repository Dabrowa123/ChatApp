export const pickUser = (id) => {
  return {
    type: "PICK_USER",
    payload: id,
  };
};
