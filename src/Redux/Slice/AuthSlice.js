import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstancce from "../../Configs/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || "",
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
};

export const signUp = createAsyncThunk("auth/signup", async (data) => {
  try {
    const response = axiosInstancce.post("signup", data);
    toast.promise(response, {
      loading: "Submitting form",
      success: "Successfully signup",
    });
    return await response;
  } catch (error) {
    const errMsg =  error.response.data.message || "Something went wrong";
    console.log(error);
    toast.error(errMsg);
  }
});

export const signIn = createAsyncThunk("auth/signin", async (data) => {
  try {
    const response = axiosInstancce.post("signin", data);
    toast.promise(response, {
      loading: "Submitting form",
      success: "Successfully signip",
    });
    return await response;
  } catch (error) {
    const message = error?.response?.data?.message || "Something went wrong";
    console.log(message);
    toast.error(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state)=>{
      state.isLoggedIn = false,
      state.token = '',
      state.username = '',
      localStorage.clear()
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoggedIn = action?.payload?.data?.data !== undefined;
      state.username = action?.payload?.data?.data?.username;
      state.token = action?.payload?.data?.data?.token;
      localStorage.setItem(
        "isLoggedIn",
        action?.payload?.data?.data !== undefined
      );
      localStorage.setItem("token", action?.payload?.data?.data?.token);
      localStorage.setItem("username", action?.payload?.data?.data?.username);
    });
  },
});


export const {logout} = authSlice.actions;
export default authSlice.reducer;
