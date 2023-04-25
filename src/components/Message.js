const Message = ({ author, time, content }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>Time: {time}</p>
      <p>Content: {content} </p>
    </li>
  );
};

export default Message;
