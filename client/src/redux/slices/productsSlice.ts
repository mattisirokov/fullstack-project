import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ProductsState = {
  allproducts: [],
  oneproduct: {
    name: "",
    image: "",
    description: "",
    category: "",
    variant: "",
    sizes: [],
  },
  isLoading: false,
};
export type Product = {
  name: string;
  image: string;
  description: string;
  category: string;
  variant: string;
  sizes: number[];
};
export interface ProductsState {
  allproducts: Product[];
  oneproduct: Product;
  isLoading: boolean; 
}

//fetch all products
export const fetchProductsThunk = createAsyncThunk(
  "products/fetch",
  async () => {
    const URL = `http://localhost:4000/api/v1/products`;
    const response = await axios.get(URL);

    return {
      data: response.data,
      status: response.status,
      console: console.log("fetching all products"),
    };
  }
);

//fetches single product for the Product page
export const fetchProductThunk = createAsyncThunk(
  "products/fetchOne",
  async (productId: string) => {
    const URL = `http://localhost:4000/api/v1/products/${productId}`;
    const response = await axios.get(URL);

    return {
      data: response.data,
      status: response.status,
      console: console.log("fetching single product"),
    };
  }
);

//fetches products for the search component
export const fetchProductSearch = createAsyncThunk(
  "products/fetchSearch",
  async (query: string) => {
    const URL = `http://localhost:4000/api/v1/products/name?name=${query}`;
    const response = await axios.get(URL);

    return {
      data: response.data,
      status: response.status,
      console: console.log("fetching all products for search"),
    };
  }
);

export const productsSlice = createSlice({
  name: "productsLast",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProductsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      state.allproducts = action.payload.data;
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
