import React from "react";

const Chat = ({ name, message }) => {
  return (
    <div>
      <strong>{name}:</strong>
      {message}
    </div>
  );
};

export default Chat;
