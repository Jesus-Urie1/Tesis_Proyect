import { createSlice } from "@reduxjs/toolkit";
import clientesAxios from "../../../config/axios";

const maestroSlice = createSlice({
  name: "gruposMaestro",
  initialState: {
    auth: [],
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
    setNuevoGrupos: (state, action) => {
      state.grupos = [...state.grupos, action.payload];
    },
    setEntrarGrupo: (state, action) => {
      state.grupos = [...state.grupos, action.payload];
    },
    setRegistrarAlumnos: (state, action) => {
      state.alumnos = [...state.alumnos, action.payload];
    },
    setNuevaConducta: (state, action) => {
      state.maestros = action.payload;
    },
    setAgregarConductaAlumno: (state, action) => {
      state.alumnos.filter((alumno, index) => {
        if (alumno.email === action.payload.email) {
          state.alumnos[index] = action.payload;
        }
      });
    },
    setNuevaListaA: (state, action) => {
      state.maestros = action.payload;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const {
  setAuth,
  setNuevoGrupos,
  setAgregarConductaAlumno,
  setNuevaListaA,
  setNuevaConducta,
  setObtenerMaestros,
  setObtenerAlumnos,
  setEntrarGrupo,
  setRegistrarAlumnos,
  setObtenerGrupos,
} = maestroSlice.actions;

export const registrar = (body, token) => async () => {
  const url = "/maestro/registrar";
  const response = await clientesAxios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      return e.response;
    });
  return { response };
};

export const nuevoGrupo = (body, token) => async () => {
  const url = "/maestro/nuevoGrupo";
  const response = await clientesAxios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      return e.response;
    });
  return { response };
};

export const entrarGrupo = (body, token) => async () => {
  const url = "/maestro/entrarGrupo";
  const response = await clientesAxios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      return e.response;
    });
  return { response };
};

export const agregarConductaAlumno = (body, token) => async () => {
  const url = "/maestro/agregarConductaAlumno";
  const response = await clientesAxios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      return e.response;
    });
  return { response };
};

export const nuevaConducta = (body, token) => async () => {
  const url = "/maestro/nuevaConducta";
  const response = await clientesAxios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      return e.response;
    });
  return { response };
};

export const nuevaListaA = (token) => async () => {
  const url = "/maestro/nuevaListaA";
  const response = await clientesAxios
    .post(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      return e.response;
    });
  return { response };
};

export const maestrosGrupo = (body, token) => async () => {
  const url = "/maestro/maestrosGrupo";
  const response = await clientesAxios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      return e.response;
    });
  return { response };
};

export const alumnosGrupo = (body, token) => async () => {
  const url = "/maestro/alumnosGrupo";
  const response = await clientesAxios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      return e.response;
    });
  return { response };
};

export const obtenerGrupos = (token) => async () => {
  const url = "/maestro/obtenerGrupos";
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

export default maestroSlice.reducer;
