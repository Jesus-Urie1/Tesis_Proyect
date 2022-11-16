import { configureStore } from "@reduxjs/toolkit";
import clasesReducer from "./Slices/Clases";

export default configureStore({
  reducer: {
    clases: clasesReducer,
  },
});
