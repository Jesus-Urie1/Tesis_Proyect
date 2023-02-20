import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useParams } from "react-router-dom";
import Graficas from "../../components/Graficas";
const Informes = () => {
  //UseParams
  const params = useParams();
  const { grupo } = params;
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
            <Link
              className="flex  border-b-4 justify-center border-transparent hover:border-b-green-600 py-2"
              to={`../${grupo}/alumnos`}
            >
              <div className="font-semibold text-xl px-4 tracking-tight  text-green-600">
                Alumnos
              </div>
            </Link>
            <div>
              <Link
                className="flex  border-b-4 justify-center border-transparent hover:border-b-green-600 py-2"
                to={`../${grupo}/listadeasistencia`}
              >
                <div className="font-semibold text-xl px-4 tracking-tight  text-green-600">
                  Lista de Asistencia
                </div>
              </Link>
            </div>

            <div>
              <Link
                className="flex  border-b-4 justify-center border-transparent hover:border-b-green-600 py-2"
                to={`../${grupo}/alumnosComun`}
              >
                <div className="font-semibold text-xl px-4 tracking-tight  text-green-600">
                  Alumnos en Comun
                </div>
              </Link>
            </div>

            <div>
              <Link
                className="flex  border-b-4 justify-center border-transparent hover:border-b-green-600 border-b-green-700  py-2"
                to={`../${grupo}/informes`}
              >
                <div className="font-semibold text-xl px-4 tracking-tight  text-green-800">
                  Informes
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Graficas />
    </>
  );
};

export default Informes;
