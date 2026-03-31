// 1. url
// 2. method
// 3. body
// 4. headers

import { useState } from "react";

function useFetch() {
  // const [isLoading, setIsLoading] = useState(false);
  const [loadingMap, setLoadingMap] = useState({});
  console.log("custom hook called");
  const fetchData = async (url, loadingKey, options) => {
    try {
      // setIsLoading(true);
      setLoadingMap((prev) => ({ ...prev, [loadingKey]: true }));
      const response = await fetch(url, options);
      const data = await response.json();
      return {
        success: response.ok,
        data,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // setIsLoading(false);
      setLoadingMap((prev) => ({ ...prev, [loadingKey]: false }));
    }
  };

  return {
    // isLoading,
    loadingMap,
    fetchData,
  };
}

export default useFetch;
