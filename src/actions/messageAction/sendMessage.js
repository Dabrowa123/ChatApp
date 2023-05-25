import axios from "axios";

export const sendMessage = ({ chatGroupId, userId, time, content }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8082/messages", {
        userId,
        time,
        content,
        chatGroupId,
        deleted: false,
      });
    } catch (error) {
      console.log("Błąd wysyłania wiadomości!", error);
    }
  };
};
