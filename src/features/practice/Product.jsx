import React from "react";

const Product = ({ id, title, body }) => {
  return (
    <li className="border p-4 rounded-2xl">
      <h2>
        {id}:- {title}
      </h2>
      <p>{body}</p>
    </li>
  );
};

export default Product;
