import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clientesAxios from "../config/axios";
import React from "react";
import LoginInput from "../components/LoginInput";
import useLoginController from "../hooks/useLoginController";

const Registrar = () => {
  const [
    nombre,
    email,
    password,
    repetirPassword,
    validPassword,
    passwordRepeated,
    registroFilled,
  ] = useLoginController();

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!registroFilled) {
      setAlerta({ msg: "Hay campos vacios", error: true });
      return;
    }

    if (!passwordRepeated) {
      setAlerta({ msg: "Los passwords no son iguales", error: true });
      return;
    }
    if (!validPassword) {
      setAlerta({
        msg: "El password es muy corto, agrega minimo 6 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    //Crear el usuario en la API
    try {
      await clientesAxios.post("/veterinarios", { nombre, email, password });
      setAlerta({
        msg: "Creado Correctamente, revisa tu email",
        error: false,
      });
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
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea tu Cuenta y Administra tus
          <span className="text-black"> Alumnos</span>
        </h1>
      </div>

      <div className="shadow-lg px-5 pt-5 rounded-xl bg-white ">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <LoginInput
              title={"Nombre"}
              type={"text"}
              placeholder={"Tu nombre"}
              {...nombre}
            />
          </div>
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
          <div className="my-5">
            <LoginInput
              title={"Repetir contraseña"}
              type={"password"}
              placeholder={"Repetir contraseña"}
              {...repetirPassword}
            />
          </div>
          <input
            type="submit"
            value="Registrate"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase 
                    font-bold mt-5 hover:cursor-pointer hover:bg-indigo- md:w-auto "
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/">
            ¿Ya tienes una cuenta? Inicia Sesion
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

export default Registrar;
