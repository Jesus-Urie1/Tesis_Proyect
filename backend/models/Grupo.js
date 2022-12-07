import mongoose from "mongoose";

//Schema de Grupo
const grupoSchema = mongoose.Schema({
  grupo: {
    type: String,
    required: true,
    trim: true,
  },
  maestros: {
    type: Object,
    default: {},
  },
  estudiantes: {
    type: Object,
    default: {},
  },
  // anuncios: {
  //   type: Array,
  //   default: [],
  // },
});

const Grupo = mongoose.model("Grupo", grupoSchema); //Registrar el modelo

export default Grupo;
