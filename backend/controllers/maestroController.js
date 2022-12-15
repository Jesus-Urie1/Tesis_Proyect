import jwt from "jsonwebtoken";
import Grupo from "../models/Grupo.js";
import moment from "moment";
import Maestro from "../models/Maestro.js";
import Alumno from "../models/Alumno.js";

//Entrar a una nueva grupo de parte del Maestro
const entrarGrupo = async (req, res) => {
  const { grupo } = req.body;
  let token;

  //Obteniendo la grupo actual
  const grupoEncontrado = await Grupo.findOne({ grupo });

  //Verificar que exista la grupo
  if (!grupoEncontrado) {
    const error = new Error("No se encontró el grupo");
    return res.status(400).json({ msg: error.message });
  }

  //Token del auth
  token = req.headers.authorization.split(" ")[1];
  //Obtener id del Maestro
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //Obteniendo Maestro actual
  const maestroActual = await Maestro.findById(decoded.id);
  const email = maestroActual.email;
  //Verificar si ya existe el Maestro
  const existeMaestro = grupoEncontrado.maestros.filter((maestro) => {
    if (maestro == email) {
      const error = new Error("Ya estas dentro del grupo");
      return res.status(400).json({ msg: error.message });
    }
  });

  if (existeMaestro.length === 0) {
    try {
      //Guardado el array en la DB
      grupoEncontrado.maestros.push(email);
      const grupoActual = await grupoEncontrado.save();

      return res.json(grupoActual);
    } catch (error) {
      console.log(error);
    }
  }
};

//Obtener la informacion de las grupos donde este dentro el maestro
const obtenerGrupos = async (req, res) => {
  //Token Auth
  let token = req.headers.authorization.split(" ")[1];
  //Obteniendo ID del maestro
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const maestro = await Maestro.findById(decoded.id);

  const grupos = await Grupo.find({
    maestros: maestro.email,
  }).select(" -__v");

  if (grupos.length === 0) {
    const error = new Error("En este momento no cuentas con grupos!");
    return res.status(400).json({ msg: error.message });
  }

  return res.json(grupos);
};

//Obtener la informacion de las grupos donde este dentro el maestro
const maestrosGrupo = async (req, res) => {
  const { grupo } = req.body;
  let maestrosGrupo = [];
  const grupoActual = await Grupo.findOne({ grupo });

  await Promise.all(
    grupoActual.maestros.map(async (email) => {
      const maestro = await Maestro.find({ email });

      maestrosGrupo.push(maestro[0]);
    })
  );
  return res.json(maestrosGrupo);
};

//Obtener la informacion de las grupos donde este dentro el maestro
const alumnosGrupo = async (req, res) => {
  const { grupo } = req.body;
  let alumnosGrupo = [];
  const grupoActual = await Grupo.findOne({ grupo });

  await Promise.all(
    grupoActual.alumnos.map(async (email) => {
      const alumno = await Alumno.find({ email });

      alumnosGrupo.push(alumno[0]);
    })
  );
  return res.json(alumnosGrupo);
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

    //Objeto Maestro
    const nuevoAnuncio = {
      id: Date.now(),
      anuncio,
      fechaPublicacion: moment().calendar(),
      de: maestro.nombre,
    };

    //Nuevo array de Maestros
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

//Publicar una nueva conducta de parte del Maestro
const nuevaConducta = async (req, res) => {
  const { tipo, titulo, descripcion, email } = req.body;

  //Obteniendo la grupo actual
  const maestro = await Maestro.findOne({ email });

  try {
    //Objeto actitud
    const nuevaConducta = {
      tipo,
      titulo,
      descripcion,
    };

    //Guardado el array en la DB de maestros
    maestro.conductas.push(nuevaConducta);

    const nuevoAuth = await maestro.save();

    return res.json(nuevoAuth);
  } catch (error) {
    console.log(error);
  }
};

//Agregar conducta a un alumno
const agregarConductaAlumno = async (req, res) => {
  const { tipo, titulo, descripcion, email, emailMaestro } = req.body;

  //Obteniendo al alumno
  const alumno = await Alumno.findOne({ email });

  //Verificar que existe el alumno
  if (!alumno) {
    const error = new Error("No se encontro al alumno");
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Objeto conducta
    const nuevaConducta = {
      maestro: emailMaestro,
      tipo,
      titulo,
      descripcion,
      fecha: moment().format("L"),
    };

    const nuevasConductas = [...alumno.conductas, nuevaConducta];

    //Guardado el array en la DB
    alumno.conductas = nuevasConductas;

    const nuevaConductaAlumno = await alumno.save();

    return res.json(nuevaConductaAlumno);
  } catch (error) {
    console.log(error);
  }
};

export {
  obtenerGrupos,
  nuevoAnuncio,
  nuevaListaA,
  nuevaConducta,
  agregarConductaAlumno,
  entrarGrupo,
  maestrosGrupo,
  alumnosGrupo,
};
