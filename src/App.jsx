import { lazy } from "react";
import { Provider } from "react-redux";
const Counter = lazy(() => import("./components/Counter"));
const Otp = lazy(() => import("./components/custom-components/Otp"));
// import Otp from "./components/custom-components/Otp";
import ErrorBoundary from "./components/ErrorBoundary";
import Fetch from "./components/Fetch";
import LocalStorage from "./components/LocalStorage";
import React1819 from "./components/react1819";
import WindowSize from "./components/WindowSize";
import UserContext from "./contexts/UserContext";
import { store } from "./store";
import Debounce from "./components/Debounce";
import Tabs from "./components/tabs/Tabs";

function App() {
  return (
    <Provider store={store}>
      <UserContext>
        {/* <Counter /> */}
        {/* <WindowSize /> */}
        {/* <Fetch /> */}
        {/* <LocalStorage /> */}
        {/* <React1819 /> */}
        {/* <ErrorBoundary>
          <Otp length={6} />
        </ErrorBoundary> */}
        <Tabs />
      </UserContext>
      {/* <Debounce />   */}
    </Provider>
  );
}

export default App;
