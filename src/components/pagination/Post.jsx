import React from "react";

const Post = ({ id, title, body }) => {
  return (
    <div className="border-2 border-black rounded-2xl p-4">
      <h2 className="font-bold">
        {id} {title}
      </h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
