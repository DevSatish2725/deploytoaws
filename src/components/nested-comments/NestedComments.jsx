import React from "react";
import { data } from "./data";
import NestedComment from "./NestedComment";
const NestedComments = () => {
  return (
    <div>
          <NestedComment data={data} />
    </div>
  );
};

export default NestedComments;
