import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productsReducer from "./features/products/redux/productsSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
});
