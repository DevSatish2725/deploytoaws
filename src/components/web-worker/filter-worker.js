self.onmessage = (event) => {
  const { products, filterValue } = event.data;
  let filteredList = products;
  if (Object.keys(filterValue).length) {
    for (let key in filterValue) {
      const convertToLowerCase = key.toLowerCase();
      const convertToArray =
        key === "Brand"
          ? filterValue[key]
          : filterValue[key].split(",").map((digit) => Number(digit));
      filteredList = filteredList.filter((data) => {
        if (key === "Brand") {
          return convertToArray.includes(data["brand"]);
        } else {
          return (
            data[convertToLowerCase] <= convertToArray[1] &&
            data[convertToLowerCase] >= convertToArray[0]
          );
        }
      });
    }
  }
  self.postMessage(filteredList);
};
