import Axios from "axios";
import toast from "react-hot-toast";
import { ACCESSTOKEN, getToken, getUserSession } from "./constant";

const userSession = getUserSession()?.user.accessToken;
const _token = getToken(ACCESSTOKEN) ? userSession : null

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    ...(_token && { Authorization: `Bearer ${_token}` }),
  },
});

axios.interceptors.request.use(
  (request) => {
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
      toast.error('Unauthorized access')
      // window.location.replace("/auth/login");
    }

    return Promise.reject(err);
  }

);

export default axios;
