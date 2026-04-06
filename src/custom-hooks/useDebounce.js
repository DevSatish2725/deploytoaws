import { useCallback, useRef } from "react";

export const useDebounce = (fn, delay) => {
  const debounceRef = useRef(null);
  return useCallback((...args) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }, [fn, delay]) ;
};