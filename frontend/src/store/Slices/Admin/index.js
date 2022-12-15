import { createSlice } from "@reduxjs/toolkit";
import clientesAxios from "../../../config/axios";

const adminSlice = createSlice({
  name: "gruposAdmin",
  initialState: {
    maestros: [],
    alumnos: [],
    grupos: [],
  },
  reducers: {
    setObtenerMaestros: (state, action) => {
      state.maestros = action.payload;
    },
    setObtenerAlumnos: (state, action) => {
      state.alumnos = action.payload;
    },
    setObtenerGrupos: (state, action) => {
      state.grupos = action.payload;
    },
    setNuevoGrupo: (state, action) => {
      state.grupos = [...state.grupos, action.payload];
    },
    setRegistrarMaestros: (state, action) => {
      state.maestros = action.payload;
    },
    setRegistrarAlumno: (state, action) => {
      state.alumnos = action.payload;
    },
  },
});

export const {
  setNuevoGrupo,
  setObtenerMaestros,
  setObtenerAlumnos,
  setRegistrarMaestros,
  setRegistrarAlumno,
  setObtenerGrupos,
} = adminSlice.actions;

export const registrarMaestro = (body) => async () => {
  const url = "/admin/registrarMaestro";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export const nuevoGrupo = (body) => async () => {
  const url = "/nuevoGrupo";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerMaestros = () => async () => {
  const url = "/admin/obtenerMaestros";
  const response = await clientesAxios(url).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerAlumnos = () => async () => {
  const url = "/admin/obtenerAlumnos";
  const response = await clientesAxios(url).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerGrupos = () => async () => {
  const url = "/admin/obtenerGrupos";
  const response = await clientesAxios(url).catch((e) => {
    return e.response;
  });
  return { response };
};

export default adminSlice.reducer;
