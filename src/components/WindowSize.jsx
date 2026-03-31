import useWindowSize from "../custom-hooks/useWindowSize";

function WindowSize() {
  const { width, height } = useWindowSize();

  return (
    <>
      <span>Width: {width}</span>
      <span>Height: {height}</span>
    </>
  );
}

export default WindowSize;
