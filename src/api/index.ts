import axios from "axios";
import { showMessage } from "./../utils/message";

// const api = axios.create({ baseURL: "/api" });
const api = axios.create({ baseURL: "/api" });

api.interceptors.response.use(undefined, (error) => {
  if (
    error &&
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  )
    showMessage(error.response.data.message, { type: "error" });

  return Promise.reject(error);
});

export default api;
