export const chatGroupsReducer = (
  state = [
    {
      groupId: 1,
      groupName: "Group1",
      userIdList: [1, 2],
      messages: [
        {
          id: 1,
          author: "user1",
          time: "19:00",
          content: "Siema",
        },
      ],
    },
    {
      groupId: 2,
      groupName: "Group2",
      userIdList: [1, 2],
      messages: [
        {
          id: 1,
          author: "user1",
          time: "19:00",
          content: "Siema",
        },
      ],
    },
  ],
  action
) => {
  switch (action.type) {
    case "CREATE_GROUP":
      return [...state, action.payload];
    default:
      return state;
  }
};
