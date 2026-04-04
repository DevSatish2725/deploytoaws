import { useState } from "react";
import Accordian from "./Accordian";
import { data } from "./data";
import MultiAccordian from "./MultiAccordian";

const Accordians = () => {
  const [accrodianType, setAccordianType] = useState(0);
  const [activeAccordian, setActiveAccordian] = useState(null);
  const [multiActiveAccordian, setMultiActiveAccordian] = useState([]);
  const handleChange = (event) => {
    setAccordianType(event.target.value);
    setActiveAccordian(null);
    setMultiActiveAccordian([]);
  };
  const handleSetActiveAccordian = (id) => {
    const matchedIdx = data.findIndex((item) => item.id === id);
    setActiveAccordian((prev) => (prev === matchedIdx ? null : matchedIdx));
  };
  const handleSetMultiActiveAccordian = (id) => {
    const matchedIdx = data.findIndex((item) => item.id === id);
    const isAlreadyActive = multiActiveAccordian.findIndex(
      (item) => item === matchedIdx,
    );
    if (isAlreadyActive !== -1) {
      const filteredActiveAccordian = multiActiveAccordian.filter(
        (item) => item !== matchedIdx,
      );
      setMultiActiveAccordian(filteredActiveAccordian);
    } else {
      setMultiActiveAccordian((prev) => [...prev, matchedIdx]);
    }
  };
  console.log(multiActiveAccordian);
  return (
    <div className="w-100">
      <select value={accrodianType} onChange={handleChange}>
        <option value={0}>Single</option>
        <option value={1}>Multi</option>
      </select>
      <div>
        {data.map((item, idx) =>
          Number(accrodianType) === 0 ? (
            <Accordian
              key={item.id}
              {...item}
              handleSetActiveAccordian={handleSetActiveAccordian}
              isOpen={activeAccordian === idx}
            />
          ) : (
            <MultiAccordian
              key={item.id}
              {...item}
              handleSetMultiActiveAccordian={handleSetMultiActiveAccordian}
              isOpen={multiActiveAccordian.includes(idx) ? true : false}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Accordians;
