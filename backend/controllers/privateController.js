//Controller Perfil
const perfil = (req, res) => {
  const { usuario } = req;
  res.json(usuario);
};

export { perfil };
