const generarCodigo = () => {
  const banco =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let aleatoria = "";
  for (let i = 0; i < 7; i++) {
    aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
  }
  return aleatoria;
};

export default generarCodigo;
