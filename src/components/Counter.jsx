import { useContext, useEffect } from "react";
import { ContextData } from "../contexts";
import { useCounter } from "../custom-hooks/useCounter";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/counterSlice";

function Counter() {
  //   const { count, increment, decrement, reset } = useCounter(0, 1);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  //   const {
  //     // state: { count },
  //     // dispatch,
  //   } = useContext(ContextData);

  //   const user = { profile: 9 };
  //   const age = user?.profile?.age;
  //   console.log("Age:", age);
  const obj = { a: 1 };

  useEffect(() => {
    console.log("Effect triggered");
  }, [obj]);
  return (
    <>
      <strong>{count}</strong>
      {/* <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button> */}
      {/* <button onClick={() => dispatch({ type: "increment" })}>Increment</button> */}
      {/* <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
}

export default Counter;
