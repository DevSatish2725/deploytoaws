import React from "react";

const Slide = ({ image }) => {
  return (
    <div className="w-lg h-88">
      <img src={image} alt={""} className="w-full h-full" />
    </div>
  );
};

export default Slide;
