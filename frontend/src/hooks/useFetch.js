import { useState, useEffect } from "react";
import clientesAxios from "../config/axios";

const useFetch = (url, method, body) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    clientesAxios(url, config)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [url]);
  return { loading, data, error };
};

export default useFetch;
