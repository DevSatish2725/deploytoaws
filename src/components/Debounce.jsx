import { useState } from "react";
import { useDebounce } from "../custom-hooks/useDebounce";

const Debounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debounce = useDebounce();
  const handleChange = (event) => {
    const debouncedFunction = () => {
      setSearchTerm(event.target.value);
    };
    debounce(debouncedFunction, 1000);
  };
  return (
    <div>
      <input onChange={handleChange} className="border border-b-black" />
      <h1>Search Term:</h1>
      <p>{searchTerm}</p>
    </div>
  );
};

export default Debounce;
