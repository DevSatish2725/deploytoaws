import React from "react";

const SidebarItem = ({ name, isActive, onClick }) => {
  return (
    <li
      className={
        isActive
          ? "bg-blue-500 text-white p-2 rounded-2xl"
          : "bg-gray-200 p-2 rounded-2xl cursor-pointer"
      }
      onClick={onClick}
    >
      {name}
    </li>
  );
};

export default SidebarItem;
