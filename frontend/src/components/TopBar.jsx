import useAuth from "../hooks/useAuth";
import { HiPlus, HiMenu } from "react-icons/hi";

const TopBar = () => {
  const { cerrarSesion } = useAuth();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-700 p-3">
      <div className="flex">
        <button
          className="flex items-center p-2  rounded-full hover:bg-indigo-600 mr-2"
          data-collapse-toggle="navbar-default"
        >
          <HiMenu color="white" size={26} />
        </button>

        <div className="flex items-center flex-shrink-0 text-white">
          <span className="font-semibold text-xl tracking-tight">
            Plataforma Educativa
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <button className="p-1 rounded-full hover:bg-indigo-600 mr-2">
          <HiPlus color="white" size={30} />
        </button>
        <button className="rounded-full hover:bg-indigo-600 p-1">
          <img
            src="https://img2.gratispng.com/20180613/egk/kisspng-professor-stock-photography-5b218ab481d817.8727019215289248525319.jpg"
            className="w-9 h-9 rounded-full"
          />
        </button>
      </div>
    </nav>
  );
};

export default TopBar;
