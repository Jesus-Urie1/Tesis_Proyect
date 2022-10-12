import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import emailRegistro from "../helpers/emailRegistro.js";
import emailOlvidePassword from "../helpers/emailOlvidePassword.js";

//Controller Registrar cuenta
const registrar = async (req, res) => {
  const { email, nombre } = req.body; //Cuando llenas un formulario

  //Revisar se ya existe el usuario
  const existeUsuario = await Usuario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Guardar un nuevo veterinario
    const usuario = new Usuario(req.body);
    const usuarioGuardado = await usuario.save();

    //Enviar el email
    emailRegistro({
      email,
      nombre,
      token: usuarioGuardado.token,
    });

    res.json(usuarioGuardado);
  } catch (error) {
    console.log(error);
  }
};

//Controller Perfil
const perfil = (req, res) => {
  const { usuario } = req;
  res.json(usuario);
};

//Controller Confirmar cuenta
const confirmar = async (req, res) => {
  const { token } = req.params; //Leer datos de la URL

  const usuarioConfirmar = await Usuario.findOne({ token });

  if (!usuarioConfirmar) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();

    res.json({ msg: "Usuario confirmado Correctamente" });
  } catch (error) {
    console.log(error);
  }
};

//Controller Authenticar
const authenticar = async (req, res) => {
  const { email, password } = req.body;

  //Comprobar si usuario existe
  const usuario = await Usuario.findOne({ email });

  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  //Comprobar si el usuario esta confirmado
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no a sido confirmada");
    return res.status(403).json({ msg: error.message });
  }

  //Revisar el password
  if (await usuario.comprobarPassword(password)) {
    //Authenticar al usuario con JWT

    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJWT(usuario.id),
    });
  } else {
    const error = new Error("Password incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

//Controller Olvide Password
const olvidePassword = async (req, res) => {
  const { email } = req.body;

  const existeUsuario = await Usuario.findOne({ email });

  if (!existeUsuario) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }

  try {
    existeUsuario.token = generarId();
    await existeUsuario.save();

    //Enviar email con instrucciones
    emailOlvidePassword({
      email,
      nombre: existeUsuario.nombre,
      token: existeUsuario.token,
    });
    res.json({ msg: "Hemos enviado un email con las intrucciones" });
  } catch (error) {
    console.log(error);
  }
};

//Controller Comprobar Token
const comprobarToken = async (req, res) => {
  const { token } = req.params; //Obteniendo token

  const tokenValido = await Usuario.findOne({ token });

  if (tokenValido) {
    //El token es valido
    res.json({ msg: "Token valido y el usuario existe" });
  } else {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }
};

//Controller Nuevo password
const nuevoPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;

  const usuario = await Usuario.findOne({ token });
  if (!usuario) {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }

  try {
    usuario.token = null;
    usuario.password = password;
    await usuario.save();
    res.json({ msg: "Password modificado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

export {
  registrar,
  perfil,
  confirmar,
  authenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
};
