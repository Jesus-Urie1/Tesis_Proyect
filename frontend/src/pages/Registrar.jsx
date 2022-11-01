import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clientesAxios from "../config/axios";
import LoginInput from "../components/LoginInput";
import useLoginController from "../hooks/useLoginController";

const Registrar = () => {
  const [
    nombre,
    apellidos,
    email,
    password,
    repetirPassword,
    validPassword,
    passwordRepeated,
    registroFilled,
  ] = useLoginController();

  const [alerta, setAlerta] = useState({});
  const [tipoCuenta, setTipoCuenta] = useState("");

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
      await clientesAxios.post("/", {
        nombre: nombre.value,
        apellidos: apellidos.value,
        email: email.value,
        tipoCuenta: tipoCuenta,
        password: password.value,
      });
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
        <img src="registro.svg" />
      </div>

      <div className="shadow-lg px-5 pt-5 rounded-xl bg-white ">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <LoginInput
              title={"Nombre(s)"}
              type={"text"}
              placeholder={"Nombre(s)"}
              {...nombre}
            />
          </div>
          <div className="my-5">
            <LoginInput
              title={"Apellidos"}
              type={"text"}
              placeholder={"Apellidos"}
              {...apellidos}
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
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tipo de Cuenta
            </label>
            <div className="flex p-3">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border 
                    bg-white checked:bg-buttonC border-gray-600 focus:outline-none 
                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain 
                    float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="radio1"
                    value="estudiante"
                    checked={tipoCuenta == "estudiante" ? true : false}
                    onChange={(e) => setTipoCuenta(e.target.value)}
                  />
                  <label
                    className="form-check-label inline-block text-gray-600 font-bold"
                    htmlFor="radio1"
                  >
                    Estudiante
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border 
                    bg-white checked:bg-buttonC border-gray-600 focus:outline-none 
                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain 
                    float-left mr-2 cursor-pointer"
                    type="radio"
                    value="maestro"
                    name="flexRadioDefault"
                    id="radio2"
                    checked={tipoCuenta == "maestro" ? true : false}
                    onChange={(e) => setTipoCuenta(e.target.value)}
                  />
                  <label
                    className="form-check-label inline-block text-gray-600 font-bold"
                    htmlFor="radio2"
                  >
                    Maestro
                  </label>
                </div>
              </div>
            </div>
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
            className="bg-buttonC w-full py-3 px-10 rounded-xl text-white uppercase 
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
