import { createSlice } from "@reduxjs/toolkit";
import clientesAxios from "../../../config/axios";

const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    auth: [],
    maestros: [],
    alumnos: [],
    grupos: [],
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setObtenerMaestros: (state, action) => {
      state.maestros = action.payload;
    },
    setObtenerAlumnos: (state, action) => {
      state.alumnos = action.payload;
    },
    setObtenerGrupos: (state, action) => {
      state.grupos = action.payload;
    },
  },
});

export const {
  setAuth,
  setObtenerMaestros,
  setObtenerAlumnos,
  setObtenerGrupos,
} = usuarioSlice.actions;

export const auth = (body) => async () => {
  const url = "/login";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerPerfil = (token) => async () => {
  const url = "/perfil";
  const response = await clientesAxios(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerMaestros = (token) => async () => {
  const url = "/admin/obtenerMaestros";
  const response = await clientesAxios(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerAlumnos = (token) => async () => {
  const url = "/admin/obtenerAlumnos";
  const response = await clientesAxios(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerGrupos = (token) => async () => {
  const url = "/admin/obtenerGrupos";
  const response = await clientesAxios(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).catch((e) => {
    return e.response;
  });
  return { response };
};
export default usuarioSlice.reducer;
