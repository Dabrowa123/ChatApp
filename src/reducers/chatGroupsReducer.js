export const chatGroupsReducer = (
  state = [
    {
      groupId: 1,
      groupName: "General",
      userIdList: [],
      messages: [],
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
                content: "Wiadomość usunięta",
                isDeleted: true,
              };
            } else {
              return message;
            }
          }),
        };
      });
    // return [
    //   state.map((group) => {
    //     const { groupId, id } = action.payload;
    //     if (group.groupId !== groupId) {
    //       return group;
    //     }

    //     return group.messages.map((message) => {
    //       if (message.id === id) {
    //         return {
    //           id: message.id,
    //           author: message.author,
    //           time: message.time,
    //           content: "Wiadomość usunięta",
    //         };
    //       }
    //     });
    //   }),
    // ];
    // {
    //   const { groupId, id } = action.payload;

    //   return state.map((group) => {
    //     if (group.groupId !== groupId) {
    //       return group;
    //     }

    //     return {
    //       ...group,
    //       messages: group.messages.filter((message) => message.id !== id),
    //     };
    //   });
    // }

    default:
      return state;
  }
};
