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
    const response = await fetch("https://dummyjson.com/products?limit=20");
    const data = await response.json();
    setProducts(data.products);
    setFilteredList(data.products);
  };
  const filterValueHandler = (filterData) => {
    const modifiedData = filterData;
    if (filterData.Brand && filterValue.Brand) {
      const copyFilterValueData = JSON.parse(JSON.stringify(filterValue));
      modifiedData.Brand = [...filterData.Brand, ...copyFilterValueData.Brand];
      if (copyFilterValueData.Brand.includes(filterData.Brand[0])) {
        modifiedData.Brand = modifiedData.Brand.filter(
          (brand) => brand !== filterData.Brand[0],
        );
      }
    }
    setFilterValue((prevFilter) => {
      return {
        ...prevFilter,
        ...modifiedData,
      };
    });
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
          : Array(10)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="w-70 rounded-2xl p-2 flex flex-col gap-4"
                >
                  <div className="w-full h-62 bg-gray-300 rounded-2xl"></div>
                  <h1 className="p-2 w-full h-6 bg-gray-300 rounded-2xl"></h1>
                  <h2 className="p-2 w-full h-8 bg-gray-300 rounded-2xl"></h2>
                  <p className="p-2 w-full h-20 bg-gray-300 rounded-2xl"></p>
                  <p className="p-2 w-full h-8 bg-gray-300 rounded-2xl">
                    <strong></strong>
                    <strong></strong>
                  </p>
                  <strong className="p-2 w-full h-6 bg-gray-300 rounded-2xl"></strong>
                </div>
              ))}
      </div>
    </div>
  );
};

export default WebWorker;
