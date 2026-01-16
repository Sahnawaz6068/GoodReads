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
    console.log(error);
    toast.error(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
