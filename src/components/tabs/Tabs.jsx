import React, { Suspense, useState } from "react";
import { tabData } from "./data";
import Tab from "./Tab";
const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexHandler = (id) => {
    const matchedIndex = tabData.findIndex((item) => item.id === id);
    setActiveIndex(matchedIndex);
  };
  let ActiveComponent = tabData[activeIndex].component;
  return (
    <div className=" mx-2 my-2">
      <div className="flex gap-2 mb-2">
        {tabData.map((item, index) => (
          <Tab
            key={item.id}
            {...item}
            activeIndexHandler={activeIndexHandler}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ActiveComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default Tabs;
