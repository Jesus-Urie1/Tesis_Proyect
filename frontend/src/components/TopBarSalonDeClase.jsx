import useAuth from "../hooks/useAuth";
import { HiPlus, HiMenu } from "react-icons/hi";

const TopBarSalonDeClase = ({ setShowClassModal, nombre, grado, grupo }) => {
  const { cerrarSesion } = useAuth();

  return (
    <nav className=" bg-indigo-700 p-3">
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
    </nav>
  );
};

export default TopBarSalonDeClase;
