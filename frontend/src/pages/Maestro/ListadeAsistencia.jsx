import { useParams } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

import ListaAsistencia from "../../components/ListaAsistencia";

const ListadeAsistencia = () => {
  //UseParams
  const params = useParams();
  const { grupo } = params;

  //Se obtiene el arreglo de las clases de la store
  const infoGrupoRedux = useSelector((state) => state.maestro);
  const grupoActual = infoGrupoRedux.grupos.filter((clase) => {
    if (clase.grupo === grupo) return clase;
  });
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
            <div>
              <Link
                className="flex  border-b-4  border-transparent justify-center hover:border-b-5 hover:border-b-green-600  py-2"
                to={`../${grupo}/alumnos`}
              >
                <div className="font-semibold text-xl px-4 tracking-tight text-green-600">
                  Alumnos
                </div>
              </Link>
            </div>
            <div>
              <Link
                className="flex  border-b-4 justify-center border-transparent hover:border-b-green-600 border-b-green-700 py-2"
                to={`../${grupo}/listadeasistencia`}
              >
                <div className="font-semibold text-xl px-4 tracking-tight  text-green-800">
                  Lista de Asistencia
                </div>
              </Link>
            </div>

            <div>
              <button className="flex  border-b-4 border-transparent justify-center hover:border-b-green-600 py-2">
                <div className="font-semibold text-xl px-4 tracking-tight text-green-600 ">
                  Alumnos en comun
                </div>
              </button>
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

      <div className="flex justify-center">
        <div className="w-9/12">
          <div className="flex justify-between">
            <ListaAsistencia grupo={grupo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListadeAsistencia;
