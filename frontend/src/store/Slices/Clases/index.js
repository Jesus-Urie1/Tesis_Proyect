import { createSlice } from "@reduxjs/toolkit";
import clientesAxios from "../../../config/axios";

const clasesSlice = createSlice({
  name: "clases",
  initialState: {
    clases: [],
    maestros: [],
    alumnos: [],
    grupos: [],
  },
  reducers: {
    setObtenerClases: (state, action) => {
      state.clases = action.payload;
    },
    setCrearClase: (state, action) => {
      state.clases = [...state.clases, action.payload];
    },
    setNuevaListaA: (state, action) => {
      state.clases = action.payload;
    },
    setNuevaActitud: (state, action) => {
      state.clases = action.payload;
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
    setRegistrarMaestro: (state, action) => {
      state.maestros = [...state.maestros, action.payload];
    },
    setRegistrarAlumno: (state, action) => {
      state.alumnos = [...state.alumnos, action.payload];
    },
    setAgregarActitud: (state, action) => {
      state.alumnos = action.payload;
    },
  },
});

export const {
  setObtenerClases,
  setCrearClase,
  setNuevaListaA,
  setNuevaActitud,
  setObtenerMaestros,
  setObtenerAlumnos,
  setRegistrarMaestro,
  setRegistrarAlumno,
  setAgregarActitud,
  setObtenerGrupos,
} = clasesSlice.actions;

export const obtenerClases = () => async () => {
  const url = "/obtenerClases";
  const response = await clientesAxios(url).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerGrupos = () => async () => {
  const url = "/obtenerGrupos";
  const response = await clientesAxios(url).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerAlumnos = () => async () => {
  const url = "/obtenerAlumnos";
  const response = await clientesAxios(url).catch((e) => {
    return e.response;
  });
  return { response };
};

export const obtenerMaestros = () => async () => {
  const url = "/obtenerMaestros";
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

export const nuevaListaA = (body) => async () => {
  const url = "/nuevaListaA";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export const nuevaActitud = (body) => async () => {
  const url = "/nuevaActitud";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export const registrar = (body) => async () => {
  const url = "/registrar";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export const agregarActitud = (body) => async () => {
  const url = "/agregarActitud";
  const response = await clientesAxios.post(url, body).catch((e) => {
    return e.response;
  });
  return { response };
};

export default clasesSlice.reducer;
