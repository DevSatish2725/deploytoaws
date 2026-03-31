import { useRef } from "react";

export const useDebounce = () => {
  const debounceRef = useRef(null);
  return (fn, delay) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      fn();
    }, delay);
  };
};
