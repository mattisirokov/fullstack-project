import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UsersState = {
  allusers: [],
  oneuser: {
    firstname: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    isBanned: false,
    isAdmin: false,
  }
};
export type User = {
  firstname: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  isBanned: boolean;
  isAdmin: boolean;
};
export interface UsersState {
  allusers: User[];
  oneuser: User;
}

//fetch all users
export const fetchUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async () => {
    const URL = `http://localhost:4000/api/v1/users`;
    const response = await axios.get(URL);

    return {
      data: response.data,
      status: response.status,
      console: console.log(response.data),
    };
  }
);

//fetch one user
export const fetchUserThunk = createAsyncThunk("user/fetchOne", async (Id) => {
    const URL = `http://localhost:4000/api/v1/users/${Id}`;
    const response = await axios.get(URL);
  
    return {
      data: response.data,
      status: response.status,
    };
  });
  

export const usersSlice = createSlice({
  name: "usersLast",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.allusers = action.payload.data;
    });
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.allusers = action.payload.data;
    });
  },
});

export default usersSlice.reducer;
