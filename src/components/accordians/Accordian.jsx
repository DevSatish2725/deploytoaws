const Accordian = ({
  id,
  title,
  content,
  isOpen,
  handleSetActiveAccordian,
}) => {
  return (
    <div>
      <h3
        className="cursor-pointer bg-gray-500 border-b-black border-b-2 p-2 flex justify-between"
        onClick={() => handleSetActiveAccordian(id)}
      >
        {title} <span>{isOpen ? "🔼" : "🔽"}</span>
      </h3>
      {isOpen && <p className="bg-gray-200 p-2">{content}</p>}
    </div>
  );
};

export default Accordian;
