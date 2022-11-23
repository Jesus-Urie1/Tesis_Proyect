import { createSlice } from "@reduxjs/toolkit";
import clientesAxios from "../../../config/axios";

const clasesSlice = createSlice({
  name: "clases",
  initialState: {
    clases: [],
    infoClase: [],
    anuncios: [],
  },
  reducers: {
    setObtenerClases: (state, action) => {
      state.clases = action.payload;
    },
    setCrearClase: (state, action) => {
      state.clases = [...state.clases, action.payload];
    },
    setInfoClase: (state, action) => {
      state.infoClase = action.payload;
    },
    setNuevoAnuncio: (state, action) => {
      state.infoClase = action.payload;
    },
  },
});

export const {
  setObtenerClases,
  setCrearClase,
  setInfoClase,
  setNuevoAnuncio,
} = clasesSlice.actions;

export const obtenerClases = () => async () => {
  const url = "/obtenerClases";
  const response = await clientesAxios(url).catch((e) => {
    return e.response;
  });
  return { response };
};

export const crearClase = (body) => async () => {
  const url = "/nuevaClase";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export const infoClase = (codigo) => async () => {
  const url = `/infoClase/${codigo}`;
  const response = await clientesAxios(url).catch((e) => {
    return e.response;
  });

  return { response };
};

export const nuevoAnuncio = (body) => async () => {
  const url = "/nuevoAnuncio";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export default clasesSlice.reducer;
