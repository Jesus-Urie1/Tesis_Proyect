import generarPass from "../helpers/generarPass.js";
import emailRegistro from "../helpers/emailRegistro.js";
import Maestro from "../models/Maestro.js";
import Grupo from "../models/Grupo.js";
import Alumno from "../models/Alumno.js";

//Controller Registrar cuenta
const registrarMaestro = async (req, res) => {
  const { maestros } = req.body; //Cuando llenas un formulario
  let maestroCorreo = [];
  await Promise.all(
    maestros.map(async (maestro) => {
      const existeMaestro = await Maestro.findOne({ email: maestro.correo });

      if (existeMaestro) {
        return;
      }

      try {
        const password = generarPass();

        //Guardar un nuevo maestro
        const nuevoMaestro = {
          nombre: maestro.maestro,
          email: maestro.correo,
          password,
          tipoCuenta: "maestro",
        };

        emailRegistro({
          email: maestro.correo,
          nombre: maestro.maestro,
          password,
        });

        const maestroRegistrado = new Maestro(nuevoMaestro);
        await maestroRegistrado.save();
      } catch (error) {
        console.log(error);
      }
      maestroCorreo.push(maestro.correo);
    })
  );
  if (maestroCorreo.length !== 0) {
    const nuevoMaestros = await Maestro.find();

    return res.json(nuevoMaestros);
  } else {
    const error = new Error("Maestro ya registrado");
    return res.status(400).json({ msg: error.message });
  }
};

//Obtener a todos los maestros
const obtenerMaestros = async (req, res) => {
  const maestros = await Maestro.find();

  if (maestros.length === 0) {
    const error = new Error("No existen maestros registrados!");
    return res.status(400).json({ msg: error.message });
  }
  res.json(maestros);
};

//Obtener a todos los alumnos
const obtenerAlumnos = async (req, res) => {
  const alumnos = await Alumno.find();

  if (alumnos.length === 0) {
    const error = new Error("No existen alumnos registrados!");
    return res.status(400).json({ msg: error.message });
  }
  res.json(alumnos);
};

//Obtener a todos los alumnos
const obtenerGrupos = async (req, res) => {
  const grupos = await Grupo.find();

  if (grupos.length === 0) {
    const error = new Error("No existen grupos registrados!");
    return res.status(400).json({ msg: error.message });
  }
  res.json(grupos);
};
export { registrarMaestro, obtenerMaestros, obtenerAlumnos, obtenerGrupos };
