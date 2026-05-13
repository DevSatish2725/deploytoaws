import React from "react";

const Debounce = React.memo(({ value, onChange }) => {
  return (
    <div className="mt-20">
      <input value={value} onChange={onChange} className="border" />
    </div>
  );
});

export default Debounce;
