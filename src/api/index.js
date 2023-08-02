import axios from "axios";
import store from "../features/store";

const axiosInstance = axios.create({
  baseURL: "https://recruit-app.onrender.com/",
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState()?.auth?.user?.userToken;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosInstance;
