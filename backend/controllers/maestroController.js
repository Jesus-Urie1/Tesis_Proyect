import jwt from "jsonwebtoken";
import Maestro from "../models/Maestro.js";
import Clase from "../models/Clase.js";
import generarCodigo from "../helpers/generarCodigo.js";

//Crear una nueva clase de parte del Maestro
const nuevaClase = async (req, res) => {
  let token;
  const { nombre, grado, grupo } = req.body; //Cuando llenas un formulario

  try {
    //Token Auth
    token = req.headers.authorization.split(" ")[1];
    //Obteniendo ID del maestro
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Obteniendo maestro actual
    const maestro = await Maestro.findById(decoded.id).select(
      "-_id -password -token -confirmado -tipoCuenta -__v"
    );

    //Objeto nueva clase
    const clase = {
      nombre,
      grado,
      grupo,
      codigo: generarCodigo(),
      maestros: {
        id: decoded.id,
        nombre: maestro.nombre,
        apellidos: maestro.apellidos,
        email: maestro.email,
      },
    };

    //Creando y guardado la nueva Clase en la BD
    const nuevaClase = new Clase(clase);
    const nuevaClaseGuardado = await nuevaClase.save();

    res.json(nuevaClaseGuardado);
  } catch (error) {
    console.log(error);
  }
};

//Proporcionar informacion de la clase
const infoClase = async (req, res) => {
  const { codigo } = req.params;

  //Obteniendo la clase actual
  const clase = await Clase.findOne({ codigo });

  res.json(clase);
};

//Obtener la informacion de las clases donde este dentro el maestro
const obtenerClases = async (req, res) => {
  //Token Auth
  let token = req.headers.authorization.split(" ")[1];
  //Obteniendo ID del maestro
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const id = decoded.id;

  const clases = await Clase.find({ "maestros.id": id }).select(
    "-_id -maestros -estudiantes  -__v"
  );
  res.json(clases);
};
export { nuevaClase, infoClase, obtenerClases };
