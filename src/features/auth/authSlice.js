import { createSlice,} from "@reduxjs/toolkit";

//this is the initial state
const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  userToken: "",
  isLoading: false,
};

//creating the auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFirstname: (state, { payload }) => {
      state.firstname = payload;
    },
    setLastname: (state, { payload }) => {
      state.lastname = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    //action to show if its loading
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    //action to log out
    logout: (state) => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.password = "";
      state.userToken = "";
    },
  },
});

//exporting all; the actions so you could use it else where
export const {  setFirstname, setLastname, setEmail, setPassword, setLoading, logout } =
  authSlice.actions;

//exporting the reducer so you could add it to the store
export default authSlice.reducer;
