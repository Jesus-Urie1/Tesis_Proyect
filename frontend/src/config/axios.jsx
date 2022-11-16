import axios from "axios";

const token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const clientesAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  ...config,
});

export default clientesAxios;
