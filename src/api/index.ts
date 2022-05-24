import axios from "axios";

// const api = axios.create({ baseURL: "/api" });
const api = axios.create({ baseURL: "http://localhost:3000/api" });

api.interceptors.response.use(undefined, (error) => {
  console.log(error.message);

  return Promise.reject(error);
});

export default api;
