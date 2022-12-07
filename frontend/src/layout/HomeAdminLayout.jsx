import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

//Redux
import { useDispatch } from "react-redux";
import {
  obtenerMaestros,
  obtenerAlumnos,
  obtenerGrupos,
} from "../store/Slices/Clases";
import {
  setObtenerMaestros,
  setObtenerAlumnos,
  setObtenerGrupos,
} from "../store/Slices/Clases";

const HomeAdminLayout = () => {
  const { auth, cargando } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    //Se obtienen los maestros
    const response = dispatch(obtenerMaestros());

    //Se obtiene respuesta
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerMaestros(r.response.data));
      } else {
        dispatch(setObtenerMaestros(r.response.data.msg));
      }
    });

    //Se obtienen las alumnos
    const response2 = dispatch(obtenerAlumnos());

    //Se obtiene respuesta
    response2.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerAlumnos(r.response.data));
      } else {
        dispatch(setObtenerAlumnos(r.response.data.msg));
      }
    });

    //Se obtienen las alumnos
    const response3 = dispatch(obtenerGrupos());

    //Se obtiene respuesta
    response3.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerGrupos(r.response.data));
      } else {
        dispatch(setObtenerGrupos(r.response.data.msg));
      }
    });
  }, [dispatch]);

  if (cargando) return "Cargando...";

  return (
    <>
      {auth?._id && auth?.tipoCuenta == "administracion" ? (
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
