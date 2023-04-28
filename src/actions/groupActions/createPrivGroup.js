export const createPrivGroup = (
  userIdList,
  currentLoggedUserName,
  currentPickedUserName
) => {
  return {
    type: "CREATE_PRIV_GROUP",
    payload: {
      groupId: Math.floor(Math.random() * 1234),
      groupName: `Priv group of user ${currentLoggedUserName} and user ${currentPickedUserName}`,
      userIdList,
      messages: [],
      isPriv: true,
    },
  };
};
