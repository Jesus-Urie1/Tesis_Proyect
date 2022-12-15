import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slices/Admin";
import maestroReducer from "./Slices/Maestros";
import alumnosReducer from "./Slices/Alumnos";

export default configureStore({
  reducer: {
    admin: adminReducer,
    maestro: maestroReducer,
    alumnos: alumnosReducer,
  },
});
