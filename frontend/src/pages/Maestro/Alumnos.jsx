import { useParams } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  maestrosGrupo,
  alumnosGrupo,
  setAuth,
} from "../../store/Slices/Maestros";
import {
  setObtenerMaestros,
  setObtenerAlumnos,
} from "../../store/Slices/Maestros";

import TablaAlumnos from "../../components/TablaAlumnos";

const SalonDeClases = () => {
  //UseParams
  const params = useParams();
  const { grupo } = params;

  const dispatch = useDispatch();

  //Se obtiene el arreglo de las clases de la store
  const redux = useSelector((state) => state.usuario);
  const token = localStorage.getItem("token");
  useEffect(() => {
    //Se obtienen los maestros
    const response2 = dispatch(alumnosGrupo({ grupo }, token));

    //Se obtiene respuesta
    response2.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerAlumnos(r.response.data));
      }
    });

    //Se obtienen los maestros
    const response = dispatch(maestrosGrupo({ grupo }, token));

    //Se obtiene respuesta
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerMaestros(r.response.data));
      }
    });
  }, [dispatch]);

  return (
    <>
      <nav className=" bg-green-700  pt-3 ">
        <div>
          <div className="flex items-center justify-between flex-wrap p-2">
            <div className="flex">
              <button
                className="flex items-center p-2  rounded-full hover:bg-green-600 mr-2"
                data-collapse-toggle="navbar-default"
              >
                <HiMenu color="white" size={26} />
              </button>

              <div className="flex items-center flex-shrink-0 text-white">
                <span className="font-semibold text-xl tracking-tight">
                  {grupo}
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <button className="rounded-full hover:bg-green-600 p-1">
                <img
                  src="https://img2.gratispng.com/20180613/egk/kisspng-professor-stock-photography-5b218ab481d817.8727019215289248525319.jpg"
                  className="w-9 h-9 rounded-full"
                />
              </button>
            </div>
          </div>

          <div className="flex justify-center bg-white ">
            <button className="flex  border-b-4  border-transparent justify-center hover:border-b-5 hover:border-b-green-700 border-b-green-700 py-2">
              <div className="font-semibold text-xl px-4 tracking-tight text-green-800">
                Alumnos
              </div>
            </button>
            <div>
              <Link
                className="flex  border-b-4 justify-center border-transparent hover:border-b-green-600  py-2"
                to={`../${grupo}/listadeasistencia`}
              >
                <div className="font-semibold text-xl px-4 tracking-tight  text-green-600">
                  Lista de Asistencia
                </div>
              </Link>
            </div>

            <div>
              <Link
                className="flex  border-b-4 justify-center border-transparent hover:border-b-green-600  py-2"
                to={`../${grupo}/alumnosComun`}
              >
                <div className="font-semibold text-xl px-4 tracking-tight  text-green-600">
                  Alumnos en Comun
                </div>
              </Link>
            </div>

            <div>
              <Link
                className="flex  border-b-4 justify-center border-transparent hover:border-b-green-600  py-2"
                to={`../${grupo}/informes`}
              >
                <div className="font-semibold text-xl px-4 tracking-tight  text-green-600">
                  Informes
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center">
        <div className="w-screen ">
          <TablaAlumnos alumnos={redux.alumnos} grupo={grupo} />
        </div>
      </div>
    </>
  );
};

export default SalonDeClases;
