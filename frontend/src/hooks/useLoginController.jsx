import { useInput } from "./useInput";

const isValidPassword = (password) => {
  return password.length > 5 ? true : false;
};

const isPasswordRepeated = (password, repetirPassword) => {
  return password !== repetirPassword ? false : true;
};

const isRegistroFilled = (name, numCuenta, password, repetirPassword) => {
  return [name, numCuenta, password, repetirPassword].includes("")
    ? false
    : true;
};

const useLoginController = () => {
  const [nombre] = useInput("");
  const [apellidos] = useInput("");
  const [numCuenta] = useInput("");
  const [password] = useInput("");
  const [repetirPassword] = useInput("");

  const validPassword = isValidPassword(password.value);
  const passwordRepeated = isPasswordRepeated(
    password.value,
    repetirPassword.value
  );

  const registroFilled = isRegistroFilled(
    password.value,
    repetirPassword.value,
    nombre.value,
    numCuenta.value
  );

  return [
    nombre,
    apellidos,
    numCuenta,
    password,
    repetirPassword,
    validPassword,
    passwordRepeated,
    registroFilled,
  ];
};

export default useLoginController;
