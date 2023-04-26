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
        {
          id: 1,
          author: "user1",
          time: "19:00",
          content: "elo",
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
    case "JOIN_GROUP":
      return [
        state.map((group) => {
          if (group.groupId !== action.payload.groupId) {
            return group;
          }

          const { userIdList } = action.payload;

          return {
            groupId: group.groupId,
            groupName: group.groupName,
            userIdList,
            messages: group.messages,
          };
        }),
      ];
    case "SEND_MESSAGE": {
      const { groupId, id, author, time, content } = action.payload;
      const message = {
        id,
        author,
        time,
        content,
      };
      return state.map((group) => {
        if (group.groupId !== groupId) {
          return group;
        }

        return {
          ...group,
          messages: [...group.messages, message],
        };
      });
    }

    default:
      return state;
  }
};
