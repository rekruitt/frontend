import { createSlice } from '@reduxjs/toolkit';
import { login } from './authActions';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [login.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user reducer...
  },
})

export default authSlice.reducer;