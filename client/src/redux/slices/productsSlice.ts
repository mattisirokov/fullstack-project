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
  }
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
      console: console.log(response.data),
    };
  }
);

//fetches single product for the Product page
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

//fetches products for the search component
export const fetchProductSearch = createAsyncThunk(
  'products/fetch',
  async (query: string) => {
    const URL = `http://localhost:4000/api/v1/products/name?name=${query}`;
    const response = await axios.get(URL)

    return {
      data: response.data,
      status: response.status,
    }
  }
)

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
      state.allproducts = action.payload.data;
    });
  },
});

export default productsSlice.reducer;
