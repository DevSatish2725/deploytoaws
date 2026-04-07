import { useEffect, useState } from "react";
import User from "./simmerui/User";
import { useThrottle } from "../custom-hooks/useThrottle";

const InfiniteScroll = () => {
  const [usersList, setUsersList] = useState([]);
  const [showSimmerUI, setShowSimmerUI] = useState(false);
  const throttle = useThrottle((value) => {
    console.log("Scroll Y:", value);
  }, 1000);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchUserOnMount = async () => {
      setShowSimmerUI(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setShowSimmerUI(false);
      setUsersList(data);
    };

    fetchUserOnMount();
  }, []);

  const fetchUsers = async () => {
    setShowSimmerUI(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setShowSimmerUI(false);
    setUsersList((prevUsers) => {
      return [...prevUsers, ...data];
    });
  };
  const handleScroll = () => {
    throttle(window.scrollY);
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchUsers();
    }
  };

  return (
    <div>
      <div className="flex gap-2 justify-between flex-wrap">
        {usersList.map((data) => (
          <User key={data.id} {...data} />
        ))}
      </div>
      {
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
      }
    </div>
  );
};

export default InfiniteScroll;
