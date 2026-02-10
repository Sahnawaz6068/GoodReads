import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from '../Redux/Slice/AuthSlice';
import bookSliceReducer from '../Redux/Slice/BookSlice';
import shelfSliceReducer from '../Redux/Slice/ShelfSlice';

export default configureStore({
  reducer: {
    auth : authSliceReducer,
    book : bookSliceReducer,
    shelf : shelfSliceReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false})
});
