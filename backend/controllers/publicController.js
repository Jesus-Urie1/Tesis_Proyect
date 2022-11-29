import Maestro from "../models/Maestro.js";
import Estudiante from "../models/Estudiante.js";
import generarJWT from "../helpers/generarJWT.js";
import Administracion from "../models/Administracion.js";

//Controller Authenticar
const authenticar = async (req, res) => {
  const { numCuenta, password } = req.body;

  //Comprobar si usuario existe
  const administracion = await Administracion.findOne({ numCuenta });
  const estudiante = await Estudiante.findOne({ numCuenta });
  const maestro = await Maestro.findOne({ numCuenta });

  if (!estudiante && !maestro && !administracion) {
    const error = new Error("Usuario o clave incorrectos");
    return res.status(404).json({ msg: error.message });
  }

  //Funcion para Revisar el password
  const revisarPassword = async (usuario) => {
    if (await usuario.comprobarPassword(password)) {
      //Authenticar al usuario con JWT

      res.json({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        numCuenta: usuario.numCuenta,
        tipoCuenta: usuario.tipoCuenta,
        token: generarJWT(usuario.id),
      });
    } else {
      const error = new Error("Usuario o clave incorrectos");
      return res.status(403).json({ msg: error.message });
    }
  };

  //Si es admin
  if (administracion) {
    revisarPassword(administracion);
    return;
  }

  //Si es estudiante
  if (estudiante) {
    revisarPassword(estudiante);
    return;
  }

  //Si es maestro
  if (maestro) {
    revisarPassword(maestro);
  }
};

// //Controller Confirmar cuenta
// const confirmar = async (req, res) => {
//   const { token } = req.params; //Leer datos de la URL

//   const maestroConfirmar = await Maestro.findOne({ token });
//   const estudianteConfirmar = await Estudiante.findOne({ token });

//   if (!maestroConfirmar && !estudianteConfirmar) {
//     const error = new Error("Token no valido");
//     return res.status(404).json({ msg: error.message });
//   }

//   //Funcion confirmar
//   const confirmar = async (usuarioConfirmar) => {
//     try {
//       usuarioConfirmar.token = null;
//       usuarioConfirmar.confirmado = true;
//       await usuarioConfirmar.save();

//       res.json({ msg: "Usuario confirmado Correctamente" });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //Si es maestro
//   if (maestroConfirmar) {
//     confirmar(maestroConfirmar);
//     return;
//   }

//   //Si es estudiante
//   if (estudianteConfirmar) {
//     confirmar(estudianteConfirmar);
//   }
// };

// //Controller Olvide Password
// const olvidePassword = async (req, res) => {
//   const { email } = req.body;

//   const existeEstudiante = await Estudiante.findOne({ email });
//   const existeMaestro = await Maestro.findOne({ email });

//   if (!existeEstudiante && !existeMaestro) {
//     const error = new Error("El usuario no existe");
//     return res.status(400).json({ msg: error.message });
//   }

//   const enviarEmail = async (existeUsuario) => {
//     try {
//       existeUsuario.token = generarId();
//       await existeUsuario.save();

//       //Enviar email con instrucciones
//       emailOlvidePassword({
//         email,
//         nombre: existeUsuario.nombre,
//         token: existeUsuario.token,
//       });
//       res.json({ msg: "Hemos enviado un email con las intrucciones" });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //Si es estudiante
//   if (existeEstudiante) {
//     enviarEmail(existeEstudiante);
//     return;
//   }

//   //Si es maestro
//   if (existeMaestro) {
//     enviarEmail(existeMaestro);
//   }
// };

// //Controller Comprobar Token
// const comprobarToken = async (req, res) => {
//   const { token } = req.params; //Obteniendo token

//   const tokenValidoEstudiante = await Estudiante.findOne({ token });
//   const tokenValidoMaestro = await Maestro.findOne({ token });

//   if (tokenValidoEstudiante || tokenValidoMaestro) {
//     //El token es valido
//     res.json({ msg: "Token valido y el usuario existe" });
//   } else {
//     const error = new Error("Token no valido");
//     return res.status(400).json({ msg: error.message });
//   }
// };

// //Controller Nuevo password
// const nuevoPassword = async (req, res) => {
//   const { password } = req.body;
//   const { token } = req.params;

//   const estudiante = await Estudiante.findOne({ token });
//   const maestro = await Maestro.findOne({ token });

//   if (!estudiante && !maestro) {
//     const error = new Error("Token no valido");
//     return res.status(400).json({ msg: error.message });
//   }

//   const modificarPassword = async (usuario) => {
//     try {
//       usuario.token = null;
//       usuario.password = password;
//       await usuario.save();
//       res.json({ msg: "Password modificado correctamente" });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //Si es estudiante
//   if (estudiante) {
//     modificarPassword(estudiante);
//     return;
//   }

//   //Si es maestro
//   if (maestro) {
//     modificarPassword(maestro);
//   }
// };

export {
  authenticar,
  // confirmar,
  // olvidePassword,
  // comprobarToken,
  // nuevoPassword,
};
