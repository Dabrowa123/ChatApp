export const createPrivGroup = (
  id,
  userIdList,
  currentLoggedUserName,
  currentPickedUserName
) => {
  return {
    type: "CREATE_PRIV_GROUP",
    payload: {
      groupId: id,
      groupName: `Priv group of user ${currentLoggedUserName} and user ${currentPickedUserName}`,
      userIdList,
      messages: [],
      isPriv: true,
    },
  };
};
