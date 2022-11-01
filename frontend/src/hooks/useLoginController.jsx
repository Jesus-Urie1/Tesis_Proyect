import { useInput } from "./useInput";

const isValidPassword = (password) => {
  return password.length > 5 ? true : false;
};

const isPasswordRepeated = (password, repetirPassword) => {
  return password !== repetirPassword ? false : true;
};

const isRegistroFilled = (name, email, password, repetirPassword) => {
  return [name, email, password, repetirPassword].includes("") ? false : true;
};

const useLoginController = () => {
  const [nombre] = useInput("");
  const [apellidos] = useInput("");
  const [email] = useInput("");
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
    email.value
  );

  return [
    nombre,
    apellidos,
    email,
    password,
    repetirPassword,
    validPassword,
    passwordRepeated,
    registroFilled,
  ];
};

export default useLoginController;
