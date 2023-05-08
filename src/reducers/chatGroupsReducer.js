export const chatGroupsReducer = (
  state = [
    {
      groupId: 1,
      groupName: "General",
      userIdList: [],
      messages: [
        {
          id: 1,
          author: "Dominik",
          time: "12:30:31",
          content: "Siemka wszystkim!",
          isDeleted: false,
        },
        {
          id: 2,
          author: "Szymon",
          time: "12:30:35",
          content: "No siema siema!",
          isDeleted: false,
        },
        {
          id: 3,
          author: "Administrator",
          time: "12:30:38",
          content: "Witajcie na czacie, tylko bądźcie grzeczni bo was zbanuję!",
          isDeleted: false,
        },
        {
          id: 4,
          author: "Dominik",
          time: "12:30:45",
          content: "Message removed",
          isDeleted: true,
        },
      ],
      isPriv: false,
    },
    {
      groupId: 2,
      groupName: "NovoAkademia",
      userIdList: [],
      messages: [],
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
    case "DELETE_GROUP":
      return state.filter((group) => group.groupId !== action.payload);
    case "SEND_MESSAGE": {
      const { groupId, id, author, time, content, isDeleted } = action.payload;
      const message = {
        id,
        author,
        time,
        content,
        isDeleted,
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
    case "DELETE_MESSAGE":
      const { groupId, id } = action.payload;
      return state.map((group) => {
        if (group.groupId !== groupId) {
          return group;
        }

        return {
          ...group,
          messages: group.messages.map((message) => {
            if (message.id === id) {
              return {
                ...message,
                content: "Message removed",
                isDeleted: true,
              };
            } else {
              return message;
            }
          }),
        };
      });

    default:
      return state;
  }
};
