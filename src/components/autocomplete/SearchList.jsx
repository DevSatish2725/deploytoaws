const SearchList = ({ searchResults, searchListClickHandler }) => {
  return (
    <ul className="p-2 flex flex-col shadow-2xl rounded-2xl click-none">
      {searchResults.length
        ? searchResults.map((result) => (
            <li
              key={result.id}
              onClick={() => searchListClickHandler(result.name)}
              className="p-2 cursor-pointer hover:bg-gray-300"
            >
              {result.name}
            </li>
          ))
        : null}
    </ul>
  );
};

export default SearchList;
