import useAuth from "../hooks/useAuth";
import { HiPlus, HiMenu } from "react-icons/hi";

const TopBarSalonDeClase = ({ setShowClassModal, nombre, grado, grupo }) => {
  const { cerrarSesion } = useAuth();

  return (
    <nav className=" bg-indigo-700 px-3 pt-3 ">
      <div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex">
            <button
              className="flex items-center p-2  rounded-full hover:bg-indigo-600 mr-2"
              data-collapse-toggle="navbar-default"
            >
              <HiMenu color="white" size={26} />
            </button>

            <div className="flex items-center flex-shrink-0 text-white">
              <span className="font-semibold text-xl tracking-tight">
                {nombre} {grado} {grupo}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <button className="rounded-full hover:bg-indigo-600 p-1">
              <img
                src="https://img2.gratispng.com/20180613/egk/kisspng-professor-stock-photography-5b218ab481d817.8727019215289248525319.jpg"
                className="w-9 h-9 rounded-full"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="flex  border-b-4 border-white  w-32 justify-center hover:bg-indigo-400 py-2">
            <div className="font-semibold text-xl tracking-tight text-white">
              Publicaciones
            </div>
          </button>
          <div>
            <button className="flex  border-b-4 border-transparent w-32 justify-center hover:bg-indigo-400  py-2">
              <div className="font-semibold text-xl tracking-tight text-slate-400 ">
                Examenes
              </div>
            </button>
          </div>

          <div>
            <button className="flex  border-b-4 border-transparent w-32 justify-center hover:bg-indigo-400  py-2">
              <div className="font-semibold text-xl tracking-tight text-slate-400 ">
                Alumnos
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBarSalonDeClase;
