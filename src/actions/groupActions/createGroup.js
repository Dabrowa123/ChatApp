export const createGroup = (groupName) => {
  return {
    type: "CREATE_GROUP",
    payload: {
      groupId: Math.floor(Math.random() * 1234),
      groupName,
      userIdList: [],
      messages: [],
      isPriv: false,
    },
  };
};
