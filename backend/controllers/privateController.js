//Controller Perfil
// const perfil = (req, res) => {
//   const { usuario } = req;
//   res.json(usuario);
// };

//Crear una nueva clase de parte del Maestro
const nuevaClase = (req, res) => {
  res.json({ msg: "Nueva Clase" });
};

export { nuevaClase };
