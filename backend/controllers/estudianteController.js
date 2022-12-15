import jwt from "jsonwebtoken";
import Grupo from "../models/Grupo.js";
import Alumno from "../models/Alumno.js";

//Entrar a una nueva grupo de parte del alumno
const entrarGrupo = async (req, res) => {
  const { codigo } = req.body;
  let token;

  //Obteniendo la grupo actual
  const grupo = await Grupo.findOne({ codigo });

  //Verificar que exista la grupo
  if (!grupo) {
    const error = new Error("No se encontró la grupo");
    return res.status(400).json({ msg: error.message });
  }

  //Token del auth
  token = req.headers.authorization.split(" ")[1];
  //Obtener id del alumno
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //Verificar si ya existe el alumno
  const existeEstudiante = grupo.estudiantes.filter((alumno) => {
    if (alumno.id == decoded.id) {
      const error = new Error("Ya estas en la grupo");
      return res.status(400).json({ msg: error.message });
    }
  });

  if (existeEstudiante.length == 0) {
    try {
      //Obteniendo alumno actual
      const alumno = await Alumno.findById(decoded.id).select(
        "-_id -password -token -confirmado -tipoCuenta -__v"
      );

      //Objeto alumno
      const nuevoEstudiante = {
        id: decoded.id,
        nombre: alumno.nombre,
        apellidos: alumno.apellidos,
        email: alumno.email,
      };

      //Nuevo array de estudiantes
      const nuevosEstudiantes = [...grupo.estudiantes, nuevoEstudiante];

      //Guardado el array en la DB
      grupo.estudiantes = nuevosEstudiantes;
      const nuevoEstudianteGuardado = await grupo.save();

      res.json(nuevoEstudianteGuardado);
    } catch (error) {
      console.log(error);
    }
  }
};

export { entrarGrupo };
