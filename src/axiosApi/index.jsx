import axios from "axios";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const axiosApi = axios.create({
  baseURL: backendUrl,
});

const setAuthHeader = (name) => {
  const cookieMatch = document.cookie.match("(?:^|; )" + name + "=([^;]*)");
  return cookieMatch ? decodeURIComponent(cookieMatch[1]) : "";
};

/* Check if we are in the browser environment */
if (typeof window !== "undefined") {
  const token = window.localStorage.getItem("_token");
  if (token) {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

/* Setting up interceptors */
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    switch (response?.status) {
      case 400:
        toast.error(response.data.message || "Bad Request");
        break;
      case 401:
        toast.error(response.data.message || "Unauthorized");
        localStorage.removeItem("_token");
        window.location.href = "/login";
        break;
      case 404:
        console.error("API not found");
        toast.error(response.data.message || "Resource not found");
        break;
      case 500:
        console.error("Server Error");
        toast.error("An unexpected error occurred. Please try again later.");
        break;
      default:
        toast.error(response?.data?.message || "An unexpected error occurred");
    }
    return Promise.reject(error);
  }
);

export { axiosApi, setAuthHeader };
