import axios from "axios";
import Cookies from "js-cookie";

console.log({ endpoint: process.env.NEXT_PUBLIC_BACKEND_URL })
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.interceptors.request.use(
  (request) => {
    request.headers["Authorization"] = `Bearer ${Cookies.get("access_token")}`;
    return request;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (err) {
    if (err?.response?.status === 401) {
      Cookies.remove("access_token");
      window.location.replace("/auth/login");
    }

    return Promise.reject(err);
  }
);

export default axios;
