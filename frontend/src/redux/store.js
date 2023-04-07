import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import imageReducer from "./imageSlice";
import userImageReducer from "./userImageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    image: imageReducer,
    userImage: userImageReducer,
  },
});
