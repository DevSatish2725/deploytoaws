import React, { useCallback, useEffect, useRef, useState } from "react";
import Debounce from "./Debounce";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

const Practice = () => {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  const timerRef = useRef(null);
  // const controllerRef = useRef(null);
  // const latestRequestID = useRef(0);
  const currentPage = useRef(0);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      // fetchData();
      setDebouncedSearchValue(inputValue);
    }, 500);
    return () => clearTimeout(timerRef.current);
  }, [inputValue]);

  const fetchData = async ({signal }) => {
    ++currentPage.current;
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${currentPage.current * limit - limit}`,
      {
        signal,
      },
    );
    console.log("Api called.");
    return response.data.products;
  };

  const { data } = useQuery({
    queryKey: ["Posts", debouncedSearchValue],
    queryFn: fetchData,
  });

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const throttle = () => {
    let lastCall = 0;
    return () => {
      scrollFn(lastCall);
    };
  };

  const scrollFn = (lastCall) => {
    console.log("last call", lastCall);
    let fixedTime = 1000;
    let currentTime = Date.now();
    if (currentTime - lastCall >= fixedTime) {
      lastCall = currentTime;
      console.log("Time to call api");
    }
  };

  useEffect(() => {
    const throttleFn = throttle();
    document.addEventListener("scroll", throttleFn);
    Promise.all([
      axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${currentPage.current * limit - limit}`,
      ),
      axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${currentPage.current * limit - limit}`,
      ),
    ]).then((data) => {
      console.log("multipromise data", data);
    });
    return () => document.removeEventListener("scroll", throttleFn);
  }, []);

  const memoizedChangeFn = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const limit = 10;

  // const fetchData = async () => {
  //   if (controllerRef.current) {
  //     controllerRef.current.abort();
  //   }
  //   const controller = new AbortController();
  //   controllerRef.current = controller;

  //   const requestID = ++latestRequestID.current;

  //   ++currentPage.current;
  //   const response = await axios.get(
  //     `https://dummyjson.com/products?limit=${limit}&skip=${currentPage.current * limit - limit}`,
  //     {
  //       signal: controller.signal,
  //     },
  //   );
  //   if (requestID !== latestRequestID.current) return;
  //   setPosts([...response.data.products, ...posts]);
  //   console.log("Api called.");
  // };

  return (
    <div>
      <Debounce value={inputValue} onChange={memoizedChangeFn} />
      <ul className="list-none mt-4">
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Practice;
