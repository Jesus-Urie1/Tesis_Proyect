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
      if (data.tipoCuenta == "administracion") {
        navigate("/administracion");
      } else if (data.tipoCuenta == "maestro") {
        navigate("/maestro");
      } else if (data.tipoCuenta == "alumno") {
        navigate("/alumno");
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
      <div className="mt-20 md:mt-5 shadow-lg px-40 py-10 rounded-sm bg-white border-2 border-gray-300">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="grid place-items-center text-center">
            <img src="logo.svg" className="w-28 mb-5" />
            <div>
              <LoginInput
                type={"email"}
                placeholder={"Correo UCOL"}
                {...email}
              />
            </div>
            <div>
              <LoginInput
                type={"password"}
                placeholder={"Contrase??a"}
                {...password}
              />
            </div>

            <input
              type="submit"
              value="Iniciar Sesi??n"
              className="bg-green-800 w-full py-3 px-10 rounded-sm text-white uppercase 
                   mt-5 hover:cursor-pointer hover:bg-indigo- md:w-auto "
            />
            <p className="mt-5 w-80 text-sm text-gray-500">
              Los datos para inicio de sesion son{" "}
              <span className="font-bold">Correo UCOL</span> y{" "}
              <span className="font-bold">Clave de Correo UCOL</span> , en caso
              de no recordar su clave de correo, comunicarse a Servicios
              Telematicos para la recuperaci??n de la clave. Ext. 00001.
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
