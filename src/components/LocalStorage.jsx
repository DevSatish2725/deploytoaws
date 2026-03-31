import { useEffect, useState } from "react";
import useLocalStorage from "../custom-hooks/use-localStorgae";

function LocalStorage() {
  const { getItem, setItem, removeItem, clearLocalStorage } = useLocalStorage();
  const [loggedInUserDetails, setLoggedInUserDetails] = useState({});
  const [theme, setTheme] = useState("");

  const handleSetData = () => {
    const userData = getItem("user");
    if (userData) {
      clearLocalStorage();
      setLoggedInUserDetails({});
      return;
    }
    const user = {
      name: "Satish Maurya",
      proffession: "Software Developer",
    };
    setItem("user", user);
    setLoggedInUserDetails(user);
  };

  const handleClearData = () => {
    clearLocalStorage();
    setLoggedInUserDetails({});
    setTheme("");
  };

  useEffect(() => {
    const user = getItem("user") ?? {};
    setLoggedInUserDetails(user);
    setItem("appTheme", "dark");
    setTheme("dark");
  }, []);

  const isDataExist = (data) => Object.keys(data).length > 0;

  return (
    <div>
      <button onClick={handleSetData}>
        {isDataExist(loggedInUserDetails) ? "Logout" : "Login"}
      </button>
      <button onClick={handleClearData}>Clear Data</button>
      <button
        onClick={() => {
          if (theme) {
            removeItem("appTheme");
            setTheme("");
            return;
          }
          setItem("appTheme", "dark");
          setTheme("dark");
        }}
      >
        {theme ? "Remove App Theme" : "Set App Theme"}
        {theme ? ` (Current: ${theme})` : ""}
      </button>
    </div>
  );
}

export default LocalStorage;
