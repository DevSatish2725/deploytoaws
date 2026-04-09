import React from "react";

const PageCount = ({
  pageCount,
  currentPage,
  prevPageHandler,
  nextPageHandler,
  currentPageHandler,
}) => {
  return (
    <div className="flex gap-2 mt-2 justify-center items-center">
      <span className="cursor-pointer" onClick={prevPageHandler}>
        ◀️
      </span>
      {[...Array(pageCount).keys()].map((pageNumber) => (
        <span
          key={pageNumber}
          onClick={() => currentPageHandler(pageNumber + 1)}
          className={`flex justify-center items-center w-6 h-6 rounded-full cursor-pointer font-normal p-1 ${currentPage === pageNumber + 1 ? "bg-gray-600 text-white" : "bg-gray-300"}`}
        >
          {pageNumber + 1}
        </span>
      ))}
      <span className="cursor-pointer" onClick={nextPageHandler}>
        ▶️
      </span>
    </div>
  );
};

export default PageCount;
