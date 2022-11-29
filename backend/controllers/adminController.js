import generarPass from "../helpers/generarPass.js";
import emailRegistro from "../helpers/emailRegistro.js";
import Maestro from "../models/Maestro.js";
import Grupo from "../models/Grupo.js";
import Administracion from "../models/Administracion.js";
import Estudiante from "../models/Estudiante.js";

//Controller Registrar cuenta
const registrar = async (req, res) => {
  const { nombre, apellidos, email, numCuenta, tipoCuenta } = req.body; //Cuando llenas un formulario

  //Revisar se ya existe el estudiante o maestro
  const existeMaestro = await Maestro.findOne({ numCuenta });
  const existeEstudiante = await Estudiante.findOne({ numCuenta });
  const existeAdmin = await Administracion.findOne({ numCuenta });

  if (existeMaestro || existeEstudiante || existeAdmin) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  if (tipoCuenta === "administracion") {
    try {
      //Guardar un nuevo maestro
      const administracion = new Administracion(req.body);
      const administracionGuardado = await administracion.save();
      emailRegistro({
        email,
        nombre,
        numCuenta,
        password,
      });
      res.json(administracionGuardado);
    } catch (error) {
      console.log(error);
    }
    return;
  }

  if (tipoCuenta === "maestro") {
    try {
      const password = generarPass();
      //Guardar un nuevo maestro
      const nuevoMaestro = {
        nombre,
        apellidos,
        email,
        password,
        numCuenta,
        tipoCuenta,
      };
      const maestro = new Maestro(nuevoMaestro);
      const maestroGuardado = await maestro.save();
      emailRegistro({
        email,
        nombre,
        numCuenta,
        password,
      });
      res.json(maestroGuardado);
    } catch (error) {
      console.log(error);
    }
    return;
  }

  if (tipoCuenta === "estudiante") {
    try {
      const password = generarPass();
      //Guardar un nuevo estudiante
      const nuevoEstudiante = {
        nombre,
        apellidos,
        email,
        password,
        numCuenta,
        tipoCuenta,
      };
      const estudiante = new Estudiante(nuevoEstudiante);
      const estudianteGuardado = await estudiante.save();
      //Enviar el email
      emailRegistro({
        email,
        nombre,
        numCuenta,
        password,
      });
      res.json(estudianteGuardado);
    } catch (error) {
      console.log(error);
    }
  }
};

//Crear una nuevo grupo
const nuevoGrupo = async (req, res) => {
  const { grupo } = req.body; //Cuando llenas un formulario

  try {
    //Obteniendo maestros
    const maestros = await Maestro.find().select(
      " -password -token -confirmado -tipoCuenta -__v"
    );
    //Obteniendo maestros
    const estudiantes = await Estudiante.find().select(
      " -password -token -confirmado -tipoCuenta -__v"
    );

    //Objeto nueva clase
    const clase = {
      grupo,
      maestros,
      estudiantes,
    };

    //Verificar si ya existe la clase
    const claseExiste = await Grupo.find({ grupo });

    if (claseExiste.length == 0) {
      //Creando y guardado la nueva Grupo en la BD
      const nuevaClase = new Grupo(clase);
      const nuevaClaseGuardado = await nuevaClase.save();

      return res.json(nuevaClaseGuardado);
    }

    //Error si ya existe la clase
    const error = new Error("Esta clase ya existe");
    return res.status(400).json({ msg: error.message });
  } catch (error) {
    console.log(error);
  }
};

export { nuevoGrupo, registrar };
