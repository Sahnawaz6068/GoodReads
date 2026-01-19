import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from '../Redux/Slice/AuthSlice';
import bookSliceReducer from '../Redux/Slice/BookSlice'

export default configureStore({
  reducer: {
    auth : authSliceReducer,
    book : bookSliceReducer,
  
  },
  devTools: true,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false})
});
