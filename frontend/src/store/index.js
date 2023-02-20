import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slices/Admin";
import maestroReducer from "./Slices/Maestros";
import alumnosReducer from "./Slices/Alumnos";
import usuarioReducer from "./Slices/Usuario";

export default configureStore({
  reducer: {
    admin: adminReducer,
    maestro: maestroReducer,
    alumnos: alumnosReducer,
    usuario: usuarioReducer,
  },
});
