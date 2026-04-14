import React from "react";

const SingleMessage = ({ id, title, description }) => {
  return (
    <li className="border p-2 rounded-2xl">
      <h1>
        <strong>{id}:- </strong>
        {title}
      </h1>
      <p>{description}</p>
    </li>
  );
};

export default SingleMessage;
