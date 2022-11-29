import jwt from "jsonwebtoken";
import Maestro from "../models/Maestro.js";
import Grupo from "../models/Grupo.js";
import moment from "moment";

//Proporcionar informacion de la grupo
const infoClase = async (req, res) => {
  const { grupo } = req.params;

  //Obteniendo la grupo actual
  const grupoObtenido = await Grupo.findOne({ grupo });

  res.json(grupoObtenido);
};

//Obtener la informacion de las grupos donde este dentro el maestro
const obtenerClases = async (req, res) => {
  //Token Auth
  let token = req.headers.authorization.split(" ")[1];
  //Obteniendo ID del maestro
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const maestro = await Maestro.findById(decoded.id);

  const grupos = await Grupo.find({
    "maestros.numCuenta": maestro.numCuenta,
  }).select(" -__v");

  if (grupos.length === 0) {
    const error = new Error("En este momento no cuentas con grupos!");
    return res.status(400).json({ msg: error.message });
  }
  res.json(grupos);
};

//Publicar un nuevo anuncio de parte del Maestro
const nuevoAnuncio = async (req, res) => {
  const { codigo, anuncio } = req.body;
  let token;

  //Obteniendo la grupo actual
  const grupo = await Grupo.findOne({ codigo });

  //Verificar que exista la grupo
  if (!grupo) {
    const error = new Error("No se encontró la grupo");
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Token Auth
    token = req.headers.authorization.split(" ")[1];
    //Obteniendo ID del maestro
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Obteniendo maestro actual
    const maestro = await Maestro.findById(decoded.id).select(
      "-_id -password -token -confirmado -tipoCuenta -__v"
    );

    //Objeto estudiante
    const nuevoAnuncio = {
      id: Date.now(),
      anuncio,
      fechaPublicacion: moment().calendar(),
      de: maestro.nombre,
    };

    //Nuevo array de estudiantes
    const nuevosAnuncios = [...grupo.anuncios, nuevoAnuncio];

    //Guardado el array en la DB
    grupo.anuncios = nuevosAnuncios;
    const nuevoAnuncioGuardado = await grupo.save();

    res.json(nuevoAnuncioGuardado);
  } catch (error) {
    console.log(error);
  }
};

export { infoClase, obtenerClases, nuevoAnuncio };
