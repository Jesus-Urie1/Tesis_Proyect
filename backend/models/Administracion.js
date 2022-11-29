import mongoose from "mongoose";
import bcrypt from "bcrypt";

//Schema de Administracion
const administracionSchema = mongoose.Schema({
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
  email: {
    type: String,
    required: true,
    unique: true, //Garantizamos que usamos un email por cuenta
    trim: true,
  },
  token: {
    type: String,
    default: null,
  },
  numCuenta: {
    type: String,
    required: true,
    unique: true, //Garantizamos que usamos un numero por cuenta
    trim: true,
  },
  tipoCuenta: {
    type: String, //Tipo de dato
    required: true, //Validacion del servidor
    trim: true, //Eliminamos los espacion en blanco
  },
});

//Hasheando el password
administracionSchema.pre("save", async function (next) {
  //Un password que ya esta hasheado, no lo vuelva a hashear
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10); //Generar el Salt
  this.password = await bcrypt.hash(this.password, salt); //Hasheando el password
});

//Comprobando password
administracionSchema.methods.comprobarPassword = async function (
  passwordFormulario
) {
  return await bcrypt.compare(passwordFormulario, this.password);
};

const Administracion = mongoose.model("admin", administracionSchema); //Registrar el modelo

export default Administracion;
