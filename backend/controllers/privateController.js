import Alumno from "../models/Alumno.js";
import Grupo from "../models/Grupo.js";
import Maestro from "../models/Maestro.js";
import Administracion from "../models/Administracion.js";
import jwt from "jsonwebtoken";
import generarPass from "../helpers/generarPass.js";
import emailRegistro from "../helpers/emailRegistro.js";

//Controller Perfil
const perfil = (req, res) => {
  const { usuario } = req;
  res.json(usuario);
};

//Crear una nuevo grupo
const nuevoGrupo = async (req, res) => {
  const { grupo, alumnos } = req.body; //Cuando llenas un formulario

  //Verificar si ya existe la grupo
  const claseExiste = await Grupo.find({ grupo });

  if (claseExiste.length !== 0) {
    const error = new Error("Grupo ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  //Token Auth
  let maestro;
  let alumnosCorreos = [];
  let token = req.headers.authorization.split(" ")[1];
  //Obteniendo ID del maestro
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const maestroActual = await Maestro.findById(decoded.id);
  const adminActual = await Administracion.findById(decoded.id);

  if (maestroActual) {
    maestro = maestroActual;
  }

  if (adminActual) {
    maestro = adminActual;
  }

  await Promise.all(
    alumnos.map(async (alumno) => {
      const existeAlumno = await Alumno.findOne({ email: alumno.correo });

      if (existeAlumno) {
        return;
      }

      try {
        const password = generarPass();
        //Guardar un nuevo alumno
        const nuevoAlumno = {
          nombre: alumno.alumno,
          password,
          email: alumno.correo,
          tipoCuenta: "alumno",
        };
        emailRegistro({
          email: alumno.correo,
          nombre: alumno.alumno,
          password,
        });

        const alumnoSave = new Alumno(nuevoAlumno);
        await alumnoSave.save();
      } catch (error) {
        console.log(error);
      }

      alumnosCorreos.push(alumno.correo);
    })
  );

  if (alumnosCorreos.length !== 0) {
    try {
      //Objeto nueva grupo
      const grupoObj = {
        grupo,
        maestros: maestro.email,
        alumnos: alumnosCorreos,
      };

      //Creando y guardado la nueva Grupo en la BD
      const nuevoGrupo = new Grupo(grupoObj);
      const nuevoGrupoGuardado = await nuevoGrupo.save();
      const alumnosGuardados = await Alumno.find();

      return res.json({ grupo: nuevoGrupoGuardado, alumnos: alumnosGuardados });
    } catch (error) {
      console.log(error);
    }
  } else {
    const error2 = new Error("Alumno ya registrado");
    return res.status(400).json({ msg: error2.message });
  }
};

export { perfil, nuevoGrupo };
