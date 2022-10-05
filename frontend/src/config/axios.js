import axios from "axios";

const clientesAxios = axios.create({
  baseURL: `${process.env.BACKEND_URL}/api`,
});

export default clientesAxios;
