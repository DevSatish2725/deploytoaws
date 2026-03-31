// set item --> key, value
// get item --> key, if value is reference type --> JSON.parse and if note --> return as it is
// remove item --> key
// clear local storage

function useLocalStorage() {
  const handleSetItem = (key, value) => {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  };
  const handleGetItem = (key) => {
    const item = localStorage.getItem(key);
    if (typeof item === "object") {
      return JSON.parse(item);
    }
    return item;
  };
  const handleRemoveItem = (key) => {
    localStorage.removeItem(key);
  };
  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  return {
    setItem: handleSetItem,
    getItem: handleGetItem,
    removeItem: handleRemoveItem,
    clearLocalStorage: handleClearLocalStorage,
  };
}

export default useLocalStorage;
