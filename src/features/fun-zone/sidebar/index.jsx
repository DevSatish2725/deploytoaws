import React from "react";
import { sidebarData } from "../sidebar-data";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ handleItemClick, activeItem }) => {
  return (
    <aside className="w-1/8 border max-h-screen">
      <div className="border-b border-b-gray-300 p-2">
        <h2 className="bg-cyan-700 text-white p-2 text-center rounded-2xl border-b-2 border-amber-500">
          Fun ZoNe
        </h2>
      </div>
      <ul className="p-2">
        {sidebarData.map((item) => (
          <SidebarItem
            key={item.id}
            name={item.name}
            isActive={activeItem === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
