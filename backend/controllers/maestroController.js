import jwt from "jsonwebtoken";
import Maestro from "../models/Maestro.js";
import Grupo from "../models/Grupo.js";
import moment from "moment";
import Estudiante from "../models/Estudiante.js";

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

//Publicar una nueva lista de asistensia de parte del Maestro
const nuevaListaA = async (req, res) => {
  const { grupo, lista } = req.body;
  let token;

  //Obteniendo la grupo actual
  const grupoEncontrado = await Grupo.findOne({ grupo });

  //Token Auth
  token = req.headers.authorization.split(" ")[1];
  //Obteniendo ID del maestro
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //Obteniendo maestro actual
  const maestro = await Maestro.findById(decoded.id);

  //Verificar que exista la grupo
  if (!grupoEncontrado) {
    const error = new Error("No se encontró el grupo");
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Objeto lista
    const nuevaLista = {
      grupo,
      fecha: moment().format("L"),
      dia: moment().format("dddd"),
      lista,
    };

    //Nuevo array de lista
    const nuevasListas = [...maestro.listasAsistencia, nuevaLista];

    //Guardado el array en la DB de maestros
    maestro.listasAsistencia = nuevasListas;

    await maestro.save();

    //Obteniendo maestros
    const maestros = await Maestro.find().select(
      " -password -token -confirmado -tipoCuenta -__v"
    );

    //Guardado el array en la DB del grupo
    grupoEncontrado.maestros = maestros;

    await grupoEncontrado.save();

    const grupos = await Grupo.find();

    res.json(grupos);
  } catch (error) {
    console.log(error);
  }
};

//Publicar una nueva actitud de parte del Maestro
const nuevaActitud = async (req, res) => {
  const { tipo, titulo, descripcion, grupo } = req.body;
  let token;

  //Obteniendo la grupo actual
  const grupoEncontrado = await Grupo.findOne({ grupo });

  //Token Auth
  token = req.headers.authorization.split(" ")[1];
  //Obteniendo ID del maestro
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //Obteniendo maestro actual
  const maestro = await Maestro.findById(decoded.id);

  //Verificar que exista la grupo
  if (!grupoEncontrado) {
    const error = new Error("No se encontró el grupo");
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Objeto actitud
    const nuevaActitud = {
      tipo,
      titulo,
      descripcion,
    };

    //Nuevo array de lista
    const nuevasActitudes = [...maestro.actitudes, nuevaActitud];

    //Guardado el array en la DB de maestros
    maestro.actitudes = nuevasActitudes;

    await maestro.save();

    //Obteniendo maestros
    const maestros = await Maestro.find().select(
      " -password -token -confirmado -tipoCuenta -__v"
    );

    //Guardado el array en la DB del grupo
    grupoEncontrado.maestros = maestros;

    await grupoEncontrado.save();

    const grupos = await Grupo.find();

    res.json(grupos);
  } catch (error) {
    console.log(error);
  }
};

//Agregar la actitud al alumno
const agregarActitud = async (req, res) => {
  const { tipo, titulo, descripcion, numCuenta } = req.body;
  let token;

  //Obteniendo el alumno
  const alumno = await Estudiante.findOne({ numCuenta });

  //Verificar que exista la grupo
  if (!alumno) {
    const error = new Error("No se al alumno");
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Objeto actitud
    const nuevaActitud = {
      tipo,
      titulo,
      descripcion,
    };

    //Nuevo array de actitudes
    const nuevasActitudes = [...alumno.actitudes, nuevaActitud];

    //Guardado el array en la DB
    alumno.actitudes = nuevasActitudes;
    await alumno.save();

    const alumnos = await Estudiante.find();

    res.json(alumnos);
  } catch (error) {
    console.log(error);
  }
};

export {
  infoClase,
  obtenerClases,
  nuevoAnuncio,
  nuevaListaA,
  nuevaActitud,
  agregarActitud,
};
