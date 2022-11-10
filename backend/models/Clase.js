import mongoose from "mongoose";

//Schema de Clase
const claseSchema = mongoose.Schema({
  nombre: {
    type: String, //Tipo de dato
    required: true, //Validacion del servidor
    trim: true, //Eliminamos los espacion en blanco
  },
  grado: {
    type: Number,
    required: true,
    trim: true,
  },
  grupo: {
    type: String,
    required: true,
    trim: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  maestros: {
    type: Array,
    default: [],
  },
  estudiantes: {
    type: Array,
    default: [],
  },
});

const Clase = mongoose.model("Clase", claseSchema); //Registrar el modelo

export default Clase;
