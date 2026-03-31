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
    <>
      <input onChange={handleChange} />
    </>
  );
};

export default Debounce;
