import { Provider } from "react-redux";
import Counter from "./components/Counter";
import Otp from "./components/custom-components/Otp";
import ErrorBoundary from "./components/ErrorBoundary";
import Fetch from "./components/Fetch";
import LocalStorage from "./components/LocalStorage";
import React1819 from "./components/react1819";
import WindowSize from "./components/WindowSize";
import UserContext from "./contexts/UserContext";
import { store } from "./store";
import Debounce from "./components/Debounce";

function App() {
  return (
    <Provider store={store}>
      <UserContext>
        {/* <Counter /> */}
        {/* <WindowSize /> */}
        {/* <Fetch /> */}
        {/* <LocalStorage /> */}
        {/* <React1819 /> */}
        <ErrorBoundary>
          <Otp length={6} />
        </ErrorBoundary>
      </UserContext>
      {/* <Debounce />   */}
    </Provider>
  );
}

export default App;
