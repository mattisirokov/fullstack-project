import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { UpdatedUser, UsersState } from "types";

const initialState: UsersState = {
  allusers: [],
  singleUser: {
    _id: "",
    firstname: "",
    surname: "",
    email: "",
    isBanned: false,
    isAdmin: false,
  },
  isLoading: false,
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
export const deleteUserThunk = createAsyncThunk(
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
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.allusers = action.payload.data;
    });
    builder.addCase(fetchUsersThunk.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchUsersThunk.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.allusers = action.payload.data;
    });
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchUserThunk.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      state.allusers = action.payload.data;
    });
    builder.addCase(updateUserThunk.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
