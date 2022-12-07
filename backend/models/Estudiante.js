import mongoose from "mongoose";
import bcrypt from "bcrypt";

//Schema de Estudiante
const estudianteSchema = mongoose.Schema({
  nombre: {
    type: String, //Tipo de dato
    required: true, //Validacion del servidor
    trim: true, //Eliminamos los espacion en blanco
  },
  apellidos: {
    type: String, //Tipo de dato
    required: true, //Validacion del servidor
    trim: true, //Eliminamos los espacion en blanco
  },
  password: {
    type: String,
    required: true,
  },
  numCuenta: {
    type: String,
    required: true,
    unique: true, //Garantizamos que usamos un numero por cuenta
    default: 20220000,
  },
  actitudes: {
    type: Array,
    default: [],
  },
  token: {
    type: String,
    default: null,
  },
  tipoCuenta: {
    type: String, //Tipo de dato
    required: true, //Validacion del servidor
    trim: true, //Eliminamos los espacion en blanco
  },
});

//Hasheando el password
estudianteSchema.pre("save", async function (next) {
  //Un password que ya esta hasheado, no lo vuelva a hashear
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10); //Generar el Salt
  this.password = await bcrypt.hash(this.password, salt); //Hasheando el password
});

//Comprobando password
estudianteSchema.methods.comprobarPassword = async function (
  passwordFormulario
) {
  return await bcrypt.compare(passwordFormulario, this.password);
};

const Estudiante = mongoose.model("Estudiante", estudianteSchema); //Registrar el modelo

export default Estudiante;
