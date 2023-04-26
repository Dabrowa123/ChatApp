const Message = ({ id, author, time, content }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Author: {author}</p>
      <p>Time: {time}</p>
      <p>Content: {content} </p>
    </div>
  );
};

export default Message;
