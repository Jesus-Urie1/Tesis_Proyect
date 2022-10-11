import { Link } from "react-router-dom";
import { useState } from "react";
import LoginInput from "../components/LoginInput";
import Alerta from "../components/Alerta";
import useLoginController from "../hooks/useLoginController";

const OlvidePassword = () => {
  const [
    nombre,
    email,
    password,
    repetirPassword,
    validPassword,
    passwordRepeated,
    registroFilled,
    loginFilled,
  ] = useLoginController();
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.value == "") {
      setAlerta({ msg: "Ingresa tu email", error: true });
      return;
    }
    setAlerta({});
  };
  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Recupera tu Acceso y no pierdas tus
          <span className="text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <LoginInput
              title={"Email"}
              type={"email"}
              placeholder={"Email@ejemplo.com"}
              {...email}
            />
          </div>
          <input
            type="submit"
            value="Enviar instrucciones"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase 
                    font-bold mt-5 hover:cursor-pointer hover:bg-indigo- md:w-auto "
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray-500"
            to="/registrar"
          >
            ¿No tienes una cuenta? Registrate
          </Link>
          <Link className="block text-center my-5 text-gray-500" to="/">
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
        </nav>
      </div>
    </>
  );
};

export default OlvidePassword;
