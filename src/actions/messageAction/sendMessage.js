import axios from "axios";

export const sendMessage = ({
  chatGroupId,
  userId,
  time,
  content,
  queueId,
}) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8080/sendMessage", {
        userId,
        time,
        content,
        chatGroupId,
        deleted: false,
        queueId,
      });
    } catch (error) {
      console.log("Błąd wysyłania wiadomości!", error);
    }
  };
};
