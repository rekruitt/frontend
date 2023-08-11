import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../../utils";
import axiosInstance from "../../api";
import { setFirstname, setLastname, setEmail, setPassword, setLoading, logout } from "./authSlice";

// Register new user
export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosInstance.post(
        "/applicant/createApplicant",
        payload?.userData
      );
      thunkAPI.dispatch(setUser(response.data));
      console.log(response.data);
      toast.success(`successfully created user called ${payload.firstname}`);
      payload.navigate("/");
    } catch (error) {
      console.log("error", error);
      return toast.error(extractErrorMessage(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});