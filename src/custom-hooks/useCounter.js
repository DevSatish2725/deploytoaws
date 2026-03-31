import { useState } from "react";

export const useCounter = function (initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prevCount) => prevCount + step);
  const decrement = () => setCount((prevCount) => prevCount - step);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
};
