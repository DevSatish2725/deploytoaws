import React, { useEffect, useState } from "react";

const SelfMade = () => {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const rowHeight = 40; // Assuming each row has a height of 40px
  const itemCount = data.length; // Total number of items in the list
  const totalContentHeight = itemCount * rowHeight; // Assuming each row has a height of 40px
  const viewportHeight = window.innerHeight - 52; // Assuming the viewport height is 500px
  let visibleNodesCount = Math.floor(viewportHeight / rowHeight) + 3;
  const [indeces, setIndeces] = useState([0, visibleNodesCount]);

  const containerScrollHandler = (event) => {
    const { scrollTop } = event.target;
    const newStartingIndex = Math.floor(scrollTop / rowHeight);
    const endIndex = newStartingIndex + visibleNodesCount;
    setIndeces([newStartingIndex, endIndex]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const visibleRange = data.slice(indeces[0], indeces[1]);
    setVisibleItems(visibleRange);
  }, [data, indeces]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log("data", data);
    setData(data);
  };

  return (
    <div
      className="w-screen p-4 border border-black overflow-y-auto"
      style={{
        height: viewportHeight,
      }}
      onScroll={containerScrollHandler}
    >
      <div style={{ height: totalContentHeight }}>
        <h1 className="mb-6 font-bold">Total Items: {itemCount}</h1>
        <div
          style={{ transform: `translateY(${indeces[0] * rowHeight}px)` }}
          className="flex flex-col gap-2"
        >
          {visibleItems.map((data) => (
            <div key={data.id} className="p-2 border border-black rounded-2xl">
              {data.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfMade;
