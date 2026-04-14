import React, { useEffect, useRef, useState } from "react";
import SingleMessage from "./SingleMessage";

const IntersectionObserverComponent = () => {
  const [data, setData] = useState([]);
  const [showSimmerUI, setShowSimmerUI] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);

  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);
  const limit = 20;
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentPage((prevPage) => (prevPage += 1));
        }
      },
      {
        rootMargin: "100px",
      },
    );
    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => observerRef.current.disconnect();
  }, []);
  useEffect(() => {
    if (currentPage === 1) {
      fetchData();
    } else if (currentPage <= Math.ceil(totalData / limit)) {
      fetchData();
    } else {
      if (loadMoreRef.current) {
        observerRef.current.unobserve(loadMoreRef.current);
      }
    }
  }, [currentPage]);

  const fetchData = async () => {
    setShowSimmerUI(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${(currentPage - 1) * limit}`,
    );
    const dataList = await response.json();
    setShowSimmerUI(false);
    setData([...data, ...dataList.products]);
    setTotalData(dataList.total);
  };
  return (
    <div className="w-full" style={{ width: "calc(100vw - 60px)" }}>
      <ul className="flex flex-col gap-4">
        {data.length && !showSimmerUI
          ? data.map((item) => <SingleMessage key={item.id} {...item} />)
          : Array(10)
              .fill(0)
              .map((_, idx) => (
                <div className="flex flex-col gap-2" key={idx}>
                  <h1 className="bg-gray-300 h-4 w-full rounded-2xl"></h1>
                  <p className="bg-gray-300 h-8 w-full mb-6 rounded-2xl"></p>
                </div>
              ))}
      </ul>
      {data.length === totalData ? (
        <h1 className="m-auto my-4 text-center">No more data...</h1>
      ) : null}
      <div ref={loadMoreRef}></div>
    </div>
  );
};

export default IntersectionObserverComponent;
