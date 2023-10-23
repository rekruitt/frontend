import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../../utils";
import axiosInstance from "../../api";
import { setLoading } from "./authSlice";

// Register new user
export const register = createAsyncThunk(
  "auth/register",
  // async (payload, thunkAPI) => {
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }

  //     console.log(payload);
  //     thunkAPI.dispatch(setLoading(true));
  //     const response = await axiosInstance.post(
  //       "/applicant/createApplicant",
  //       payload?.userData
  //     );
  //     thunkAPI.dispatch(setUser(response.data));
  //     console.log(response.data);
  //     toast.success(`successfully created user called ${payload.firstname}`);
  //     payload.navigate("/");
  //   }

  async (userData, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(userData);
      const { data } = await axiosInstance.post(
        "/applicant/createApplicant",
        body,
      );
      console.log(data);
      localStorage.setItem("token", JSON.stringify(data));
      return data;
    } catch (error) {
      console.log("error", error);
      return toast.error(extractErrorMessage(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    return await authService.login(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});
