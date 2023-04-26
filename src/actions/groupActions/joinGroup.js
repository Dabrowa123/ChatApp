export const createGroup = ({ groupId, userIdList }) => {
  return {
    type: "JOIN_GROUP",
    payload: {
      groupId,
      userIdList,
    },
  };
};
