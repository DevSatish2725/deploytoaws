const MultiAccordian = ({
  id,
  title,
  content,
  handleSetMultiActiveAccordian,
  isOpen,
}) => {
  console.log(isOpen);
  return (
    <div>
      <h3
        className="cursor-pointer bg-gray-500 border-b-black border-b-2 p-2 flex justify-between"
        onClick={() => handleSetMultiActiveAccordian(id)}
      >
        {title} <span>{isOpen ? "🔼" : "🔽"}</span>
      </h3>
      {isOpen && <p className="bg-gray-200 p-2">{content}</p>}
    </div>
  );
};

export default MultiAccordian;
