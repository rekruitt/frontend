import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store);