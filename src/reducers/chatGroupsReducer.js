export const chatGroupsReducer = (
  state = [
    {
      groupId: 1,
      groupName: "Group1",
      userIdList: [],
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
      isPriv: false,
    },
    {
      groupId: 2,
      groupName: "Group2",
      userIdList: [],
      messages: [
        {
          id: 1,
          author: "user1",
          time: "19:00",
          content: "Siema",
        },
      ],
      isPriv: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case "CREATE_GROUP":
      return [...state, action.payload];
    case "CREATE_PRIV_GROUP":
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
            isPriv: group.isPriv,
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
