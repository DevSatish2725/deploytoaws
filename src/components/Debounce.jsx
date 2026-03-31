import { useDebounce } from "../custom-hooks/useDebounce";

const Debounce = () => {
    const debounce = useDebounce();
    const handleChange = (event) => {
        const debouncedFunction = () => {
            console.log("Input changed", event.target.value);
        };
        debounce(debouncedFunction, 1000);
    };
  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};

export default Debounce;
