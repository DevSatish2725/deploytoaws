import { useEffect, useState } from "react";
import User from "./simmerui/User";
import { useThrottle } from "../custom-hooks/useThrottle";

const InfiniteScroll = () => {
  const [usersList, setUsersList] = useState([]);
  const [showSimmerUI, setShowSimmerUI] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [dataLength, setDataLength] = useState(0);
  const limit = 20;
  const throttle = useThrottle((value) => {
    console.log("Scroll Y:", value);
  }, 1000);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage === 1) {
      fetchUsers();
    } else if (currentPage <= Math.ceil(totalData / limit)) {
      fetchUsers();
    }
  }, [currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataLength(usersList.length);
    }, 500);
    return () => clearTimeout(timer);
  }, [usersList]);

  const fetchUsers = async () => {
    setShowSimmerUI(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${(currentPage - 1) * limit}`,
    );
    const data = await response.json();
    setShowSimmerUI(false);
    const copyUsersList = JSON.parse(JSON.stringify(usersList));
    setUsersList([...copyUsersList, ...data.products]);
    setTotalData(data.total);
  };
  const handleScroll = () => {
    throttle(window.scrollY);
    if (
      Math.ceil(window.scrollY + window.innerHeight) >=
      document.body.scrollHeight
    ) {
      setCurrentPage((prevValue) => (prevValue += 1));
    }
  };
  return (
    <div>
      <div className="flex gap-2 justify-between flex-wrap">
        {usersList.map((data) => (
          <User key={data.id} {...data} />
        ))}
      </div>
      {dataLength > 0 && dataLength === totalData ? (
        <h1 className="text-center font-bold my-4">No more data...</h1>
      ) : (
        <div className="flex gap-2 justify-between flex-wrap">
          {showSimmerUI &&
            Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-2 w-80 h-30 flex flex-col gap-2"
                >
                  <p className="bg-gray-300 p-2 rounded-2xl"></p>
                  <p className="bg-gray-300 p-2 rounded-2xl"></p>
                  <p className="bg-gray-300 p-2 rounded-2xl"></p>
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
