import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstancce from "../../Configs/axiosInstance";

const initialState = {
  shelfList:[]
};

export const getAllBooksShelves = createAsyncThunk("course/getAllBooksShelves", async () => {
    try{
        const response = axiosInstancce.get("bookshelves",{
            'x-access-token': localStorage.getItem("token")
        });
        toast.promise(response,{
            loading: "loading bookshelves data",
            success: "Sucessfully loaded all the bookshelves",
            error:  "something went wrong" 
        })
        return await response;
    }catch(error){
        console.log(error);
        toast.error("Can not fetch bookshelves")
    }
});


const shelfSlice = createSlice({
  name: "shelf",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksShelves.fulfilled, (state, action) => {
      if(action?.payload?.data?.data){
        state.shelfList = action?.payload?.data?.data;
      }
    });
  },
});

export default shelfSlice.reducer;
