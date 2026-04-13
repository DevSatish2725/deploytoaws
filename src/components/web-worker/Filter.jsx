import React from "react";

const Filter = ({
  data,
  filterValue,
  filterValueHandler,
  clearFilterHandler,
}) => {
  const renderFilterLable = (type, value) => {
    if (type === "Rating") {
      return `${value[0]} - ${value[1]}`;
    } else if (type === "Price") {
      return `Rs. ${value[0]} - Rs. ${value[1]}`;
    } else if (type === "Brand") {
      return value;
    }
  };
  const checkedHandler = (type, value) => {
    if (filterValue[type]) {
      if (type === "Rating" || type === "Price") {
        return (
          filterValue[type].split(",").map((digit) => Number(digit))[0] ===
          value[0]
        );
      } else if (type === "Brand") {
        return filterValue[type].includes(value);
      }
    } else {
      return false;
    }
  };
  return (
    <div>
      <div className="border-b mb-2 flex justify-between items-center p-2">
        <h1 className="font-bold">Filter</h1>
        <button
          onClick={() => clearFilterHandler("all")}
          className="cursor-pointer bg-amber-500 py-1 px-2 rounded-2xl"
        >
          Clear Filter
        </button>
      </div>
      <ul>
        {data.map((parentData) => (
          <li key={parentData.id} className="border-b">
            <p className="flex justify-between items-center">
              <span>{parentData.name}</span>
              <button
                onClick={() => clearFilterHandler(parentData.name)}
                className="cursor-pointer"
              >
                ❎
              </button>
            </p>
            <ul>
              {parentData.options
                ? parentData.options.map((childData) => (
                    <li key={childData.id}>
                      {parentData.name === "Brand" ? (
                        <input
                          type="checkbox"
                          name={parentData.name}
                          value={childData.option}
                          checked={checkedHandler(
                            parentData.name,
                            childData.option,
                          )}
                          onChange={(event) => {
                            filterValueHandler({
                              [parentData.name]: [event.target.value],
                            });
                          }}
                        />
                      ) : (
                        <input
                          type="radio"
                          name={parentData.name}
                          value={childData.option}
                          checked={checkedHandler(
                            parentData.name,
                            childData.option,
                          )}
                          onChange={(event) => {
                            filterValueHandler({
                              [parentData.name]: event.target.value,
                            });
                          }}
                        />
                      )}{" "}
                      <span>
                        {renderFilterLable(parentData.name, childData.option)}
                      </span>
                    </li>
                  ))
                : null}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
