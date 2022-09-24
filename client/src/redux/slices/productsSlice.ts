import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};
export type Product = {
  name: string;
  image: string;
  description: string;
  category: string;
  variant: string;
  sizes: [Number];
};

//fetch all products
export const fetchProductsThunk = createAsyncThunk(
  "products/fetch",
  async () => {
    const URL = `http://localhost:4000/api/v1/products`;
    const response = await axios.get(URL);

    return {
      data: response.data,
      status: response.status,
    };
  }
);

//fetches single country for the Product page
export const fetchProductThunk = createAsyncThunk(
  "products/fetch",
  async (productId: string) => {
    const URL = `http://localhost:4000/api/v1/products/${productId}`;
    const response = await axios.get(URL);

    return {
      data: response.data,
      status: response.status,
    };
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
      state.products = action.payload.data;
    });
  },
});

export default productsSlice.reducer;
