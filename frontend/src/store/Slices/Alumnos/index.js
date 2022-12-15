import { createSlice } from "@reduxjs/toolkit";
import clientesAxios from "../../../config/axios";

const alumnoSlice = createSlice({
  name: "gruposEstudiate",
  initialState: {
    maestros: [],
    alumnos: [],
    grupos: [],
  },
  reducers: {},
});

export const {} = alumnoSlice.actions;

export default alumnoSlice.reducer;
