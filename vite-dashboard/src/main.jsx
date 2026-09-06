import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { store } from "../redux/store";
import { Provider } from "react-redux";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

function AuthBootstrap({ children }) {
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/user/refresh`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(
          login({
            user: res.data.id,
            accessToken: res.data.accessToken,
          })
        );
      })
      .catch(() => {
        dispatch(logout());
      })
      .finally(() => {
        setAuthReady(true);
      });
  }, [dispatch]);

  if (!authReady) {
    return <div>Loading...</div>;
  }

  return children;
}


createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <AuthBootstrap>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </AuthBootstrap>
    </Provider>
  // </StrictMode>
);
