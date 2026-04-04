import { useEffect, useState } from "react";
import User from "./User";

const SimmerUI = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  return (
    <div>
      {!users.length ? (
        <div className="flex gap-2 justify-between flex-wrap">
          {Array(10)
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
      ) : (
        <div className="flex gap-2 justify-between flex-wrap">
          {users.map((data) => (
            <User key={data.id} {...data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SimmerUI;
