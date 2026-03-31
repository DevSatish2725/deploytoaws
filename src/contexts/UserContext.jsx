import { useReducer } from "react";
import { ContextData } from "./index";

const initialValue = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };
  }
};
const UserContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const globalValues = {
    state,
    dispatch,
  };
  return (
    <ContextData.Provider value={globalValues}>
      {props.children}
    </ContextData.Provider>
  );
};

export default UserContext;
