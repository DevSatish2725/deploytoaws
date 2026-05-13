import React, { useState } from "react";
import StopWatch from "./StopWatch";
import Sidebar from "./sidebar";

const FunZone = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const renderComponent = () => {
    switch (activeItem) {
      case 1:
        return <StopWatch />;
      default:
        return (
          <div className="text-center text-2xl font-bold">
            Select an item from the sidebar
          </div>
        );
    }
  };

  return (
    <main className="flex">
      <Sidebar handleItemClick={handleItemClick} activeItem={activeItem} />
      <section className="flex-1 border min-h-screen p-2">
        {renderComponent()}
      </section>
    </main>
  );
};

export default FunZone;
