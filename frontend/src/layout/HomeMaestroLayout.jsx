import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
//Redux
import { obtenerGrupos } from "../store/Slices/Maestros";
import {
  obtenerPerfil,
  setAuth,
  setObtenerGrupos,
} from "../store/Slices/Usuario";
import { useDispatch, useSelector } from "react-redux";
import { authMaestro } from "../Utils/authMaestro";

const HomeMaestroLayout = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.usuario);

  useEffect(() => {
    authMaestro(
      dispatch,
      obtenerPerfil,
      obtenerGrupos,
      setAuth,
      setObtenerGrupos,
      token
    );
  }, []);

  if (usuario.auth.length === 0) return "Cargando...";

  return (
    <>
      {usuario.auth._id && usuario.auth.tipoCuenta == "maestro" ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default HomeMaestroLayout;
