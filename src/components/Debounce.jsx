import { useState } from "react";
import { useDebounce } from "../custom-hooks/useDebounce";

const Debounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (value) => {
    setSearchTerm(value);
  };
  const debounce = useDebounce(handleChange, 1000);

  return (
    <div>
      <input
        onChange={(event) => debounce(event.target.value)}
        className="border border-b-black"
      />
      <h1>Search Term:</h1>
      <p>{searchTerm}</p>
    </div>
  );
};

export default Debounce;
