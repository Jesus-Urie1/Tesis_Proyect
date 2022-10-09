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
  const [email] = useInput("");
  const [passworddd] = useInput("");
  const [repetirPassword] = useInput("");

  const validPassword = isValidPassword(passworddd.value);
  const passwordRepeated = isPasswordRepeated(
    passworddd.value,
    repetirPassword.value
  );

  const registroFilled = isRegistroFilled(
    passworddd.value,
    repetirPassword.value,
    nombre.value,
    email.value
  );

  return [
    nombre,
    email,
    passworddd,
    repetirPassword,
    validPassword,
    passwordRepeated,
    registroFilled,
  ];
};

export default useLoginController;
