import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstancce from "../../Configs/axiosInstance";

const initialState = {
  bookList:[]
};

export const getAllBooks = createAsyncThunk("course/getAllBooks", async () => {
    try{
        const response = axiosInstancce.get("books");
        toast.promise(response,{
            loading: "loading books data",
            success: "Sucessfully loaded all the book",
            error:  "something went wrong" 
        })
        return await response;
    }catch(error){
        console.log(error);
        toast.error("Can not fetch books")
    }
});



const bookSlice = createSlice({
  name: "book ",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      if(action?.payload?.data?.data){
        state.bookList = action?.payload?.data?.data;
      }
    });
  },
});

export default bookSlice.reducer;
