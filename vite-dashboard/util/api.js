// api.js
import axios from "axios";
import { store } from "../redux/store.js"; // adjust imports
import { login,logout } from "../features/userSlice.js";


// 2️⃣ Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:3001/", // your backend base URL
  withCredentials: true, // needed for httpOnly refresh token cookies
});

// 3️⃣ Request interceptor → attach access token
api.interceptors.request.use(
  (config) => {

    let currentAccessToken = store.getState().user.accessToken;
    console.log('Access Token in Redux : ',store.getState().user.accessToken)

    if (currentAccessToken) {
      config.headers=config.headers || {};
      config.headers["authorization"] = `Bearer ${currentAccessToken}`;
      console.log(`Access Token Sent to API : `,config.headers['authorization']);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 and refresh
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // if 401 and not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // queue the request while refresh is in progress
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['authorization'] = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axios.get(
          "http://localhost:3001/user/refresh",
          { withCredentials: true }
        );
        const newToken = res.data.accessToken;
        store.dispatch(login({user : res.data.id, accessToken:newToken}));
        api.defaults.headers.common["authorization"] = `Bearer ${newToken}`;
        processQueue(null, newToken);
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        store.dispatch(logout());
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
