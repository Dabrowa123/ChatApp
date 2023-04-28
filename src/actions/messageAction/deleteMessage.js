export const deleteMessage = (groupId, id) => {
  return {
    type: "DELETE_MESSAGE",
    payload: {
      groupId,
      id,
    },
  };
};
