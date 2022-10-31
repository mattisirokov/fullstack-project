import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UsersState = {
  allusers: [],
  oneuser: {
    _id: "",
    firstname: "",
    surname: "",

    email: "",

    isBanned: false,
    isAdmin: false,
  },
};
export type User = {
  _id: string;
  firstname: string;
  surname: string;

  email: string;

  isBanned: boolean;
  isAdmin: boolean;
};
export interface UsersState {
  allusers: User[];
  oneuser: User;
}

export type UpdatedUser = {
  _id: string;
  firstname: string;
  surname: string;

  email: string;

  isBanned: boolean;
  isAdmin: boolean;
};

//fetch all users
export const fetchUsersThunk = createAsyncThunk("users/fetchAll", async () => {
  const URL = `http://localhost:4000/api/v1/users`;
  const response = await axios.get(URL);

  console.log("fetching all users");

  return {
    data: response.data,
    status: response.status,
  };
});

//fetch one user
export const fetchUserThunk = createAsyncThunk(
  "user/fetchOne",
  async (Id: string) => {
    const URL = `http://localhost:4000/api/v1/users/${Id}`;
    const response = await axios.get(URL);

    return {
      data: response.data,
      status: response.status,
    };
  }
);

//delete user
export const deleteOneUserThunk = createAsyncThunk(
  "user/delete",
  async (Id: string) => {
    const URL = `http://localhost:4000/api/v1/users/${Id}`;
    const response = await axios.delete(URL);

    console.log("deleted user");

    return {
      data: Id,
      status: response.status,
    };
  }
);

//update user
export const updateUserThunk = createAsyncThunk(
  "user/update",
  async (user: UpdatedUser) => {
    const URL = `http://localhost:4000/api/v1/users/${user._id}`;
    const response = await axios.put(URL);
    console.log("user has been updated");

    return {
      data: response.data,
      status: response.status,
    };
  }
);

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
