import useAuth from "../hooks/useAuth";
import { HiPlus, HiMenu } from "react-icons/hi";

const TopBar = () => {
  const { cerrarSesion } = useAuth();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-700 p-3">
      <div className="flex">
        <button
          className="flex items-center p-2  rounded-full hover:bg-indigo-600 mr-2 ml-2"
          data-collapse-toggle="navbar-default"
        >
          <HiMenu color="white" size={26} />
        </button>

        <div className="flex items-center flex-shrink-0 text-white">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Plataforma EduCol
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="p-1 mx-5 rounded-full hover:bg-indigo-600">
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
