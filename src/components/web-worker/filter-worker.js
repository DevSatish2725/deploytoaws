self.onmessage = (event) => {
  const { products, filterValue } = event.data;
  let filteredList = products;
  if (Object.keys(filterValue).length) {
    let filteredData = {};
    for (let key in filterValue) {
      const convertToLowerCase = key.toLowerCase();
      const convertToArray = filterValue[key]
        .split(",")
        .map((digit) => Number(digit));
      filteredData.list = products
        .filter(
          (data) =>
            data[convertToLowerCase] <= convertToArray[1] &&
            data[convertToLowerCase] >= convertToArray[0],
        )
        .filter((secondFilter) => {
          return Object.keys(filteredData).length
            ? secondFilter[
                Object.keys(filteredData)[Object.keys(filteredData).length - 1]
              ] <=
                filteredData[
                  Object.keys(filteredData)[
                    Object.keys(filteredData).length - 1
                  ]
                ][1] &&
                secondFilter[
                  Object.keys(filteredData)[
                    Object.keys(filteredData).length - 1
                  ]
                ] >=
                  filteredData[
                    Object.keys(filteredData)[
                      Object.keys(filteredData).length - 1
                    ]
                  ][0]
            : true;
        });

      filteredData[convertToLowerCase] = convertToArray;
    }
    filteredList = filteredData.list;
  }
  self.postMessage(filteredList);
};
