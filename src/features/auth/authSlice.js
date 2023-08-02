import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";


//this is the initial state
const initialState = {
  user: {
    userToken: "",
  },
  isLoading: false,
};


//creating the auth slice 
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //action to change user state
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    //action to show if its loading
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    //action to log out
    logout: (state) => {
      state.user = { userToken: "" };
    },
  },
});

//exporting all; the actions so you could use it else where
export const { logout, setLoading, setUser } = authSlice.actions;

//exporting the reducer so you could add it to the store 
export default authSlice.reducer;
