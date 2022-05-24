import axios from "axios";
import { showMessage } from "./../utils/message";

const api = axios.create({ baseURL: "/api" });
// const api = axios.create();
// const api = axios.create({ baseURL: `http://${document.domain}:3000/api` });

// api.interceptors.request.use((cnf) => {
//   cnf.baseURL = `http://${document.domain}:3000/api`;
//   return cnf;
// });
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
