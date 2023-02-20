import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPerfil,
  setAuth,
  setObtenerAlumnos,
  setObtenerGrupos,
  setObtenerMaestros,
  obtenerAlumnos,
  obtenerGrupos,
  obtenerMaestros,
} from "../store/Slices/Usuario";

import { authUsuario } from "../Utils/authUsuario";

const HomeAdminLayout = () => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.usuario);
  const token = localStorage.getItem("token");

  useEffect(() => {
    authUsuario(
      dispatch,
      obtenerPerfil,
      obtenerAlumnos,
      obtenerGrupos,
      obtenerMaestros,
      setAuth,
      setObtenerAlumnos,
      setObtenerGrupos,
      setObtenerMaestros,
      token
    );
  }, [token]);

  // se muestra un componente de carga si el usuario aún no ha sido autenticado
  if (usuario.auth.length === 0) return "Cargando...";
  return (
    <>
      {/*Comprobar el tipo de usuario*/}
      {usuario.auth.email && usuario.auth.tipoCuenta == "administracion" ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default HomeAdminLayout;
