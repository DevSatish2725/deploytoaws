import React, { Suspense, useRef, useState } from "react";
import { tabData } from "./data";
import Tab from "./Tab";
const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabContainerRef = useRef(null);
  const activeIndexHandler = (id) => {
    const matchedIndex = tabData.findIndex((item) => item.id === id);
    setActiveIndex(matchedIndex);
  };
  let ActiveComponent = tabData[activeIndex].component;
  const scrollToRightHandler = () => {
    if (
      tabContainerRef.current.clientWidth + tabContainerRef.current.scrollLeft <
      tabContainerRef.current.scrollWidth
    )
      tabContainerRef.current.scrollLeft += 100;
  };
  const scrollToLeftHandler = () => {
    if (tabContainerRef.current.scrollLeft > 0)
      tabContainerRef.current.scrollLeft -= 100;
  };
  return (
    <div className=" mx-2 my-2 flex flex-col items-center">
      <div className="flex">
        <span className="cursor-pointer" onClick={scrollToLeftHandler}>
          ◀️
        </span>
        <div
          className="flex gap-2 mb-2 w-[80vw] overflow-x-auto no-scrollbar px-0.5"
          ref={tabContainerRef}
        >
          {tabData.map((item, index) => (
            <Tab
              key={item.id}
              {...item}
              activeIndexHandler={activeIndexHandler}
              isActive={index === activeIndex}
            />
          ))}
        </div>
        <span className="cursor-pointer" onClick={scrollToRightHandler}>
          ▶️
        </span>
      </div>
      <div>
        <Suspense fallback={null}>
          <ActiveComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default Tabs;
