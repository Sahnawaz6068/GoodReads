import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from '../Redux/Slice/AuthSlice'

export default configureStore({
  reducer: {
    auth : authSliceReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false})
});
