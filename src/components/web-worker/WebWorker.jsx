import { useEffect, useRef, useState } from "react";
import Product from "./Product";
import Filter from "./Filter";
import { filterData } from "./filterData";

const WebWorker = () => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState({});
  const [filteredList, setFilteredList] = useState([]);
  const fitlerWorkerRef = useRef(null);
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fitlerWorkerRef.current = new Worker(
      new URL("./filter-worker.js", import.meta.url),
    );
  }, []);
  useEffect(() => {
    fitlerWorkerRef.current.postMessage({ products, filterValue });
    fitlerWorkerRef.current.onmessage = (event) => {
      setFilteredList(event.data);
    };
  }, [products, filterValue]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=10");
    const data = await response.json();
    setProducts(data.products);
    setFilteredList(data.products);
  };
  const filterValueHandler = (filterValue) => {
    setFilterValue((prevFilter) => ({
      ...prevFilter,
      ...filterValue,
    }));
  };

  const clearFilterHandler = (clearType) => {
    if (clearType === "all") {
      setFilterValue({});
    } else {
      const copyData = JSON.parse(JSON.stringify(filterValue));
      delete copyData[clearType];
      setFilterValue(copyData);
    }
  };

  return (
    <div
      className="flex gap-4 items-start relative"
      style={{ width: "calc(100vw - 40px)" }}
    >
      <aside className="w-60 p-2 shadow-2xl rounded-2xl sticky top-4">
        <Filter
          data={filterData}
          filterValue={filterValue}
          filterValueHandler={filterValueHandler}
          clearFilterHandler={clearFilterHandler}
        />
      </aside>
      <div className="p-2 flex flex-wrap gap-4 flex-1 shadow-2xl rounded-2xl">
        {filteredList.length
          ? filteredList.map((product) => (
              <Product key={product.id} {...product} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default WebWorker;
