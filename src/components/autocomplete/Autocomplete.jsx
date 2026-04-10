import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../custom-hooks/useDebounce";
import SearchList from "./SearchList";

const Autocomplete = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchList, setShowSearchList] = useState(false);
  const closeIconRef = useRef(null);
  const fetchSearchResults = (value) => {
    // Simulate an API call
    setTimeout(() => {
      setSearchResults([
        { id: 1, name: `${value} Result 1` },
        { id: 2, name: `${value} Result 2` },
        { id: 3, name: `${value} Result 3` },
      ]);
    }, 500);
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("click-none") ||
        e.target?.parentElement?.classList.contains("click-none")
      ) {
        return;
      }
      setShowSearchList(false);
    });
  }, []);
  const debounce = useDebounce(fetchSearchResults, 200);
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    debounce(e.target.value);
  };
  const searchListClickHandler = (value) => {
    setInput(value);
    setShowSearchList(false);
  };
  return (
    <div className="mt-4">
      <div className="w-105 m-auto">
        <div className="flex items-center gap-2 border border-black rounded-2xl">
          <input
            value={input}
            onChange={inputChangeHandler}
            onFocus={() => setShowSearchList(true)}
            className=" w-full p-2 flex-1 outline-0 click-none"
          />
          {input ? (
            <span
              ref={closeIconRef}
              id="close-icon"
              onClick={() => {
                setInput("");
              }}
              className="cursor-pointer click-none"
            >
              ❎
            </span>
          ) : null}
        </div>
        {showSearchList && (
          <SearchList
            searchResults={searchResults}
            searchListClickHandler={searchListClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
