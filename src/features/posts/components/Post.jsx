import React from "react";

const Post = ({ title, body }) => {
  return (
    <li className="border shadow-2xl rounded-2xl p-2 w-100">
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
};

export default Post;
