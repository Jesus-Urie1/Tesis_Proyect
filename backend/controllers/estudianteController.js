import jwt from "jsonwebtoken";
import Clase from "../models/Clase.js";
import Estudiante from "../models/Estudiante.js";

//Entrar a una nueva clase de parte del estudiante
const entrarClase = async (req, res) => {
  const { codigo } = req.body;
  let token;

  //Obteniendo la clase actual
  const clase = await Clase.findOne({ codigo });
  y;
  //Verificar que exista la clase
  if (!clase) {
    const error = new Error("No se encontró la clase");
    return res.status(400).json({ msg: error.message });
  }

  //Token del auth
  token = req.headers.authorization.split(" ")[1];
  //Obtener id del estudiante
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //Verificar si ya existe el estudiante
  const existeEstudiante = clase.estudiantes.filter((estudiante) => {
    if (estudiante.id == decoded.id) {
      const error = new Error("Ya estas en la clase");
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
      const nuevosEstudiantes = [...clase.estudiantes, nuevoEstudiante];

      //Guardado el array en la DB
      clase.estudiantes = nuevosEstudiantes;
      const nuevoEstudianteGuardado = await clase.save();

      res.json(nuevoEstudianteGuardado);
    } catch (error) {
      console.log(error);
    }
  }
};

export { entrarClase };
