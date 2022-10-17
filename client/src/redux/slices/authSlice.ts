import { CredentialResponse } from "@react-oauth/google";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  token: "",
  isLoading: false,
  error: false,
  success: false,
};

export const sendUserTokenThunk = createAsyncThunk(
  "auth/sendUserToken",
  async (response: CredentialResponse) => {
    try {
      if (response.credential) {
        const res = await axios.post(
          "http://localhost:4000/api/v1/login",
          {},

          {
            headers: {
              id_token: response.credential,
            },
          }
        );
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log("token:", token);
        return {
          res: res.data.token, 
          status: res.status
        }
        
      }
    } catch (error: any) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "authenticating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendUserTokenThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendUserTokenThunk.fulfilled, (state, action) => {
      state.token = action.payload?.res;
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(sendUserTokenThunk.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
