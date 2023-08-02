import { configureStore,combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

const allReducers=combineReducers({
    auth:authReducer
})

 const store = configureStore({
  reducer:allReducers,
})


export default store;