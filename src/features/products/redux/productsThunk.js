import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsList } from "../services/productsAPI";

export const productListThunk = createAsyncThunk("prodcutsList/api", async () => {
    const data = await productsList();
    return data;
})