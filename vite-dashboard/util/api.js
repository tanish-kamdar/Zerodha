// api.js
import axios from 'axios';
import { store } from '../redux/store.js'; // adjust imports

// 1️⃣ Keep currentAccessToken synced with Redux
let currentAccessToken = null;
store.subscribe(() => {
  currentAccessToken = store.getState().user.accessToken;
});

// 2️⃣ Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3001/',      // your backend base URL
  withCredentials: true // needed for httpOnly refresh token cookies
});

// 3️⃣ Request interceptor → attach access token
api.interceptors.request.use(
  (config) => {
    if (currentAccessToken) {
      config.headers['authorization'] = `Bearer ${currentAccessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 4️⃣ Response interceptor → handle 401 / refresh token (optional, can add later)
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // Call refresh token endpoint
//         const res = await axios.get('/api/refresh-token', { withCredentials: true });
//         const newAccessToken = res.data.accessToken;

//         // Update Redux and currentAccessToken
//         store.dispatch(setAccessToken(newAccessToken));

//         // Retry original request
//         originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         // Refresh failed → logout
//         store.dispatch(logout());
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
