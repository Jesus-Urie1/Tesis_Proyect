import jwt from "jsonwebtoken";
import Maestro from "../models/Maestro.js";
import Clase from "../models/Clase.js";
import generarCodigo from "../helpers/generarCodigo.js";

//Crear una nueva clase de parte del Maestro
const nuevaClase = async (req, res) => {
  let token;
  const { nombre } = req.body; //Cuando llenas un formulario

  try {
    token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const maestro = await Maestro.findById(decoded.id).select(
      "-_id -password -token -confirmado -tipoCuenta -__v"
    );

    const clase = {
      nombre,
      codigo: generarCodigo(),
      maestros: {
        id: decoded.id,
        nombre: maestro.nombre,
        apellidos: maestro.apellidos,
        email: maestro.email,
      },
    };
    const nuevaClase = new Clase(clase);
    const nuevaClaseGuardado = await nuevaClase.save();

    res.json(nuevaClaseGuardado);
  } catch (error) {
    console.log(error);
  }
};

export { nuevaClase };
