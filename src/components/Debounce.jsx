import { useState } from "react";
import { useDebounce } from "../custom-hooks/useDebounce";

const Debounce = () => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (value) => {
    setSearchTerm(value);
  };
  const debounce = useDebounce(handleSearchTerm, 1000);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    debounce(e.target.value);
  };

  return (
    <div>
      <input
        value={input}
        onChange={inputChangeHandler}
        className="border border-b-black"
      />
      <h1>Search Term:</h1>
      <p>{searchTerm}</p>
    </div>
  );
};

export default Debounce;
