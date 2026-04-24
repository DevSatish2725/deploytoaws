import { createSlice } from "@reduxjs/toolkit";
import { productListThunk } from "./productsThunk";

const initialState = {
  loading: false,
  data: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(productListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(productListThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(productListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const loadingFn = (state) => state.products.loading;
export const productsListFn = (state) => state.products.data;

export default productsSlice.reducer;
