import { createSlice } from "@reduxjs/toolkit";
import { userImages } from "./imageAction";

let initialState = {
  loading: false,
  img: [],
  error: null,
  totalPages: 0,
  success: false,
};

export const userImageSlice = createSlice({
  name: "userImage",
  initialState,
  reducers: {},
  extraReducers: {
    [userImages.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userImages.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.img = payload;
    },
    [userImages.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});

export const {} = userImageSlice.actions;

export default userImageSlice.reducer;
