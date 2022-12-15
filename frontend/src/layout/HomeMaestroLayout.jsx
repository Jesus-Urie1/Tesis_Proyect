import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
//Redux
import {
  setAuth,
  obtenerGrupos,
  setObtenerGrupos,
} from "../store/Slices/Maestros";
import { useDispatch } from "react-redux";

const HomeMaestroLayout = () => {
  const { auth, cargando } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    //Se obtienen las clases
    const response = dispatch(obtenerGrupos());

    //Se obtiene respuesta
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerGrupos(r.response.data));
      }
    });
  }, [dispatch]);

  if (cargando) return "Cargando...";

  return (
    <>
      {auth?._id && auth?.tipoCuenta == "maestro" ? (
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
