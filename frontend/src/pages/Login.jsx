import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useLoginController from "../hooks/useLoginController";
import LoginInput from "../components/LoginInput";
import Alerta from "../components/Alerta";
import clientesAxios from "../config/axios";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const { setAuth } = useAuth();

  const [
    nombre,
    email,
    password,
    repetirPassword,
    validPassword,
    passwordRepeated,
    registroFilled,
  ] = useLoginController();

  const navigate = useNavigate();

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email.value, password.value].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }
    setAlerta({});
    //Conectar con el usuario en la API

    try {
      const { data } = await clientesAxios.post("/login", {
        email: email.value,
        password: password.value,
      });
      localStorage.setItem("token", data.token);
      setAuth(data);
      if (data.tipoCuenta == "estudiante") {
        navigate("/estudiante");
      } else if (data.tipoCuenta == "maestro") {
        navigate("/maestro");
      }
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <img src="login.svg" />
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
          <div className="my-5">
            <LoginInput
              title={"Password"}
              type={"password"}
              placeholder={"Tu contraseña"}
              {...password}
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
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
          <Link
            className="block text-center my-5 text-gray-500"
            to="/olvide-password"
          >
            Olvide mi password
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Login;
