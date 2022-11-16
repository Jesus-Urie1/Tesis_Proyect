import { createSlice } from "@reduxjs/toolkit";
import clientesAxios from "../../../config/axios";

export const clasesSlice = createSlice({
  name: "clases",
  initialState: {
    clases: [],
  },
  reducers: {
    setObtenerClases: (state, action) => {
      //state.push(action.payload);
      state.clases = action.payload;
    },
  },
});

export const { setObtenerClases } = clasesSlice.actions;

export default clasesSlice.reducer;

export const obtenerClases = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const url = "/obtenerClases";
  clientesAxios(url, config)
    .then((response) => {
      dispatch(setObtenerClases(response.data));
    })
    .catch((e) => console.log(e));
};
