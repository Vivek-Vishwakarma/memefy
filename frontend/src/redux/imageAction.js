import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = import.meta.env.VITE_API_BASE_URL;
// First, create the thunk
export const fetchAllImage = createAsyncThunk(
  "image/fetchAllImage",
  async (page) => {
    try {
      const response = await axios.get(`${backendURL}/image/?page=${page}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const imageSearch = createAsyncThunk(
  "image/imageSearch",
  async ({ input, page }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      // console.log(input, page);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `${backendURL}/image/search?q=${input}&page=${page}`,
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.msg) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue(error.msg);
      }
    }
  }
);
export const searchTag = createAsyncThunk(
  "image/searchTag",
  async (tag, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `${backendURL}/image/tag?tagname=${tag}`,
        config
      );
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.msg) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue(error.msg);
      }
    }
  }
);
export const uploadImg = createAsyncThunk(
  "image/uploadImg",
  async ({ name, tags, imageUrl }, { rejectWithValue }) => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      // console.log(userToken);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken.token,
        },
      };
      const { data } = await axios.post(
        `${backendURL}/image/upload`,
        { name, tags, imageUrl },
        config
      );
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.msg) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue(error.msg);
      }
    }
  }
);

export const allFilter = createAsyncThunk(
  "image/allFilter",
  async ({ name, tags, page }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `${backendURL}/image/all?page=${page}&name=${name}&tags=${tags}`,
        config
      );
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.msg) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue(error.msg);
      }
    }
  }
);

export const userImages = createAsyncThunk(
  "image/userImages",
  async (userId, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`${backendURL}/image/${userId}`, config);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.msg) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue(error.msg);
      }
    }
  }
);
