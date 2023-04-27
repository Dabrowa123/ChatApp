export const createPrivGroup = (userIdList) => {
  return {
    type: "CREATE_PRIV_GROUP",
    payload: {
      groupId: Math.floor(Math.random() * 1234),
      groupName: `Priv group of user ${userIdList[0].userId} and user ${userIdList[1]}`,
      userIdList,
      messages: [],
      isPriv: true,
    },
  };
};
