import React from "react";
import profileImage from "../../assets/react.svg";

const NestedComment = ({ data }) => {
  return data.map((comment) => (
    <div key={comment.id} className="pl-10 border-l-2 border-black">
      <div className="flex gap-2">
        <img src={profileImage} alt="user profile image" />
        <div>
          <h3>{comment.username}</h3>
          <p>{comment.comment}</p>
        </div>
      </div>
      {comment.replies && <NestedComment data={comment.replies} />}
    </div>
  ));
};

export default NestedComment;
