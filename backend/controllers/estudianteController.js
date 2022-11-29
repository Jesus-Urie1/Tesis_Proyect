import jwt from "jsonwebtoken";
import Grupo from "../models/Grupo.js";
import Estudiante from "../models/Estudiante.js";

//Entrar a una nueva grupo de parte del estudiante
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
  //Obtener id del estudiante
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //Verificar si ya existe el estudiante
  const existeEstudiante = grupo.estudiantes.filter((estudiante) => {
    if (estudiante.id == decoded.id) {
      const error = new Error("Ya estas en la grupo");
      return res.status(400).json({ msg: error.message });
    }
  });

  if (existeEstudiante.length == 0) {
    try {
      //Obteniendo estudiante actual
      const estudiante = await Estudiante.findById(decoded.id).select(
        "-_id -password -token -confirmado -tipoCuenta -__v"
      );

      //Objeto estudiante
      const nuevoEstudiante = {
        id: decoded.id,
        nombre: estudiante.nombre,
        apellidos: estudiante.apellidos,
        email: estudiante.email,
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
