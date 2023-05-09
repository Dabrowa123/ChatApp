export const editUser = ( id, email ) => ({
  type: "EDIT_USER",
  payload: {
    id,
    email
  },
});
