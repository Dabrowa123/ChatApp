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
      groupName: `Priv group of ${currentLoggedUserName} and ${currentPickedUserName}`,
      userIdList,
      messages: [],
      isPriv: true,
    },
  };
};
