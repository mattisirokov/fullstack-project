import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductsState } from "types";

const initialState: ProductsState = {
  items: [],
  singleItem: {
    _id: "",
    name: "",
    image: "",
    description: "",
    category: "",
    variant: "",
    sizes: [],
  },
  isLoading: false,
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
      console: console.log("fetching all products"),
    };
  }
);

//fetch product by category
export const fetchProductByCategoryThunk = createAsyncThunk(
  "products/fetchByCategory",
  async (category: string) => {
    const URL = `http://localhost:4000/api/v1/products/category?category=${category}`;
    const response = await axios.get(URL);

    console.log("fetching products by category");

    return {
      data: response.data,
      status: response.status,
    };
  }
);

//delete product
export const deleteProductThunk = createAsyncThunk(
  "products/delete",
  async (productId: string) => {
    const URL = `http://localhost:4000/api/v1/products/${productId}`;
    const response = await axios.delete(URL);

    return {
      data: response.data,
      status: response.status,
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

//add product
export const addProductThunk = createAsyncThunk(
  "products/add",
  async (product: Product) => {
    const URL = `http://localhost:4000/api/v1/products`;
    const response = await axios.post(URL, product);
    console.log("adding new product");

    return {
      data: response.data,
      status: response.status,
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
      state.singleItem = action.payload.data;
      state.isLoading = false;
    });

    builder.addCase(fetchProductByCategoryThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductByCategoryThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchProductByCategoryThunk.fulfilled, (state, action) => {
      state.singleItem = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchProductSearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductSearch.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchProductSearch.fulfilled, (state, action) => {
      state.singleItem = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(addProductThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProductThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addProductThunk.fulfilled, (state, action) => {
      state.singleItem = action.payload.data;
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
