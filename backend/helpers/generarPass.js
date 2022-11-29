const generarPass = () => {
  const banco =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let aleatoria = "";
  for (let i = 0; i < 10; i++) {
    aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
  }
  return aleatoria;
};

export default generarPass;
