export const editUser = ({ id, author, comment, rate }) => ({
  type: "EDIT_USER",
  payload: {
    id,
    author,
    comment,
    rate,
  },
});
