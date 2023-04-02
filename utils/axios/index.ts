import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
axios.interceptors.request.use(
  (request) => {
    request.headers!["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
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
    if (err.response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.replace("/login");
    }

    return Promise.reject(err);
  }
);

export default axios;
