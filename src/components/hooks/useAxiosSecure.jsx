// src/hooks/useAxiosSecure.js
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authentication/context/providers/AuthProvider";

// base axios instance (module level)
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_baseURL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    // request interceptor
    const reqIntercept = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers = config.headers || {};
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // response interceptor
    const resIntercept = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        // guard if response is undefined (network error)
        const status = error?.response?.status;
        console.log("axiosSecure interceptor status:", status);

        if (status === 401 || status === 403) {
          try {
            // optional: remove token before logout to avoid loops
            localStorage.removeItem("access-token");
            await logOut?.(); // if logOut exists
          } catch (e) {
            console.error("Error during logOut in interceptor:", e);
          } finally {
            navigate("/login");
          }
        }
        return Promise.reject(error);
      }
    );

    // cleanup: eject interceptors when unmount
    return () => {
      axiosSecure.interceptors.request.eject(reqIntercept);
      axiosSecure.interceptors.response.eject(resIntercept);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
