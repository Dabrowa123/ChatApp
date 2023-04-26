export const sendMessage = ({ groupId, author, time, content }) => {
  return {
    type: "SEND_MESSAGE",
    payload: {
      groupId,
      id: Math.floor(Math.random() * 1234),
      author,
      time,
      content,
    },
  };
};
