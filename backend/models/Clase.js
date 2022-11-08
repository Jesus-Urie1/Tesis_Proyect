import mongoose from "mongoose";

//Schema de Clase
const claseSchema = mongoose.Schema({
  nombre: {
    type: String, //Tipo de dato
    required: true, //Validacion del servidor
    trim: true, //Eliminamos los espacion en blanco
  },
  codigo: {
    type: String,
    required: true, //Validacion del servidor
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
