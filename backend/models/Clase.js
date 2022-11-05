import mongoose from "mongoose";
import generarCodigo from "../helpers/generarCodigo";

//Schema de Clase
const claseSchema = mongoose.Schema({
  nombre: {
    type: String, //Tipo de dato
    required: true, //Validacion del servidor
    trim: true, //Eliminamos los espacion en blanco
  },
  codigo: {
    type: String,
    default: generarCodigo(),
  },
  maestros: [
    {
      id: { type: String, unique: true },
      nombre: { type: String, required: true },
      apellidos: { type: String, required: true },
      email: { type: String, required: true },
    },
  ],
  estudiantes: [
    {
      id: { type: String, unique: true },
      nombre: { type: String, required: true },
      apellidos: { type: String, required: true },
      email: { type: String, required: true },
    },
  ],
});

const Clase = mongoose.model("Clase", claseSchema); //Registrar el modelo

export default Clase;
