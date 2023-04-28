export const deleteGroup = (id) => {
  return {
    type: "DELETE_GROUP",
    payload: id,
  };
};
