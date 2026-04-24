import axios from "axios";

export const productsList = async () => {
  const response = await axios("https://dummyjson.com/products?limit=10");
  return response.data;
};
