import { lazy } from "react";
import { Provider } from "react-redux";
const Counter = lazy(() => import("./components/Counter"));
const Otp = lazy(() => import("./components/custom-components/Otp"));
// import Otp from "./components/custom-components/Otp";
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const Fetch = lazy(() => import("./components/Fetch"));
const LocalStorage = lazy(() => import("./components/LocalStorage"));
const React1819 = lazy(() => import("./components/react1819"));
const WindowSize = lazy(() => import("./components/WindowSize"));
const UserContext = lazy(() => import("./contexts/UserContext"));
import { store } from "./store";
const Debounce = lazy(() => import("./components/Debounce"));
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
