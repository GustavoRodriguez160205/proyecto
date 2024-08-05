import axios from "axios";
const testApi = axios.create({
  baseURL: "https://backend-tp3.onrender.com",
});

testApi.interceptors.request.use((config) => {
  config.headers = {
    "x-token": localStorage.getItem("token"),
  };
  return config;
});
export default testApi;
