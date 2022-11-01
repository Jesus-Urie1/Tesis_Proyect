import Maestro from "../models/Maestro.js";
import Estudiante from "../models/Estudiante.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import emailRegistro from "../helpers/emailRegistro.js";
import emailOlvidePassword from "../helpers/emailOlvidePassword.js";

//Controller Registrar cuenta
const registrar = async (req, res) => {
  const { email, nombre, tipoCuenta } = req.body; //Cuando llenas un formulario

  //Revisar se ya existe el estudiante o maestro
  const existeMaestro = await Maestro.findOne({ email });
  const existeEstudiante = await Estudiante.findOne({ email });
  if (existeMaestro || existeEstudiante) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  if (tipoCuenta === "maestro") {
    try {
      //Guardar un nuevo maestro
      const maestro = new Maestro(req.body);
      const maestroGuardado = await maestro.save();

      //Enviar el email
      emailRegistro({
        email,
        nombre,
        token: maestroGuardado.token,
      });

      res.json(maestroGuardado);
    } catch (error) {
      console.log(error);
    }
    return;
  }

  if (tipoCuenta === "estudiante") {
    try {
      //Guardar un nuevo estudiante
      const estudiante = new Estudiante(req.body);
      const estudianteGuardado = await estudiante.save();

      //Enviar el email
      emailRegistro({
        email,
        nombre,
        token: estudianteGuardado.token,
      });

      res.json(estudianteGuardado);
    } catch (error) {
      console.log(error);
    }
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

  const maestroConfirmar = await Maestro.findOne({ token });
  const estudianteConfirmar = await Estudiante.findOne({ token });

  if (!maestroConfirmar && !estudianteConfirmar) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  //Funcion confirmar
  const confirmar = async (usuarioConfirmar) => {
    try {
      usuarioConfirmar.token = null;
      usuarioConfirmar.confirmado = true;
      await usuarioConfirmar.save();

      res.json({ msg: "Usuario confirmado Correctamente" });
    } catch (error) {
      console.log(error);
    }
  };

  //Si es maestro
  if (maestroConfirmar) {
    confirmar(maestroConfirmar);
    return;
  }

  //Si es estudiante
  if (estudianteConfirmar) {
    confirmar(estudianteConfirmar);
  }
};

//Controller Authenticar
const authenticar = async (req, res) => {
  const { email, password } = req.body;

  //Comprobar si usuario existe
  const estudiante = await Estudiante.findOne({ email });
  const maestro = await Maestro.findOne({ email });

  if (!estudiante && !maestro) {
    const error = new Error("El correo no existe");
    return res.status(404).json({ msg: error.message });
  }

  //Funcion para comprobar si el usuario esta confirmado
  const confirmado = (usuario) => {
    if (!usuario.confirmado) {
      const error = new Error("Tu cuenta no a sido confirmada");
      return res.status(403).json({ msg: error.message });
    }
  };

  //Funcion para Revisar el password
  const revisarPassword = async (usuario) => {
    if (await usuario.comprobarPassword(password)) {
      //Authenticar al usuario con JWT

      res.json({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        tipoCuenta: usuario.tipoCuenta,
        token: generarJWT(usuario.id),
      });
    } else {
      const error = new Error("Correo o contraseña incorrectos");
      return res.status(403).json({ msg: error.message });
    }
  };

  //Si es estudiante
  if (estudiante) {
    confirmado(estudiante);
    revisarPassword(estudiante);
    return;
  }

  //Si es maestro
  if (maestro) {
    confirmado(maestro);
    revisarPassword(maestro);
  }
};

//Controller Olvide Password
const olvidePassword = async (req, res) => {
  const { email } = req.body;

  const existeEstudiante = await Estudiante.findOne({ email });
  const existeMaestro = await Maestro.findOne({ email });

  if (!existeEstudiante && !existeMaestro) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }

  const enviarEmail = async (existeUsuario) => {
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

  //Si es estudiante
  if (existeEstudiante) {
    enviarEmail(existeEstudiante);
    return;
  }

  //Si es maestro
  if (existeMaestro) {
    enviarEmail(existeMaestro);
  }
};

//Controller Comprobar Token
const comprobarToken = async (req, res) => {
  const { token } = req.params; //Obteniendo token

  const tokenValidoEstudiante = await Estudiante.findOne({ token });
  const tokenValidoMaestro = await Maestro.findOne({ token });

  if (tokenValidoEstudiante || tokenValidoMaestro) {
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

  const estudiante = await Estudiante.findOne({ token });
  const maestro = await Maestro.findOne({ token });

  if (!estudiante && !maestro) {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }

  const modificarPassword = async (usuario) => {
    try {
      usuario.token = null;
      usuario.password = password;
      await usuario.save();
      res.json({ msg: "Password modificado correctamente" });
    } catch (error) {
      console.log(error);
    }
  };

  //Si es estudiante
  if (estudiante) {
    modificarPassword(estudiante);
    return;
  }

  //Si es maestro
  if (maestro) {
    modificarPassword(maestro);
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
