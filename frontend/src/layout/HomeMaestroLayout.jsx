import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
//Redux
import {
  obtenerAlumnos,
  obtenerClases,
  obtenerMaestros,
  setObtenerAlumnos,
  setObtenerMaestros,
} from "../store/Slices/Clases";
import { setObtenerClases } from "../store/Slices/Clases";
import { useDispatch } from "react-redux";

const HomeMaestroLayout = () => {
  const { auth, cargando } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    //Se obtienen las clases
    const response = dispatch(obtenerClases());

    //Se obtiene respuesta
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerClases(r.response.data));
      }
    });

    //Se obtienen las maestros
    const response2 = dispatch(obtenerMaestros());

    //Se obtiene respuesta
    response2.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerMaestros(r.response.data));
      }
    });

    //Se obtienen los alumnos
    const response3 = dispatch(obtenerAlumnos());

    //Se obtiene respuesta
    response3.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerAlumnos(r.response.data));
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
