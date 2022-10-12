import React from "react";
import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";

const HomeProfe = () => {
  return (
    <div>
      <TopBar />

      <div className="flex justify-around pt-10 pb-10">
        {/* Pequeña card del user  */}
        <div className="flex items-center shadow px-5  rounded-xl bg-white hover:border-2 border-indigo-600">
          <img
            src="https://img2.gratispng.com/20180613/egk/kisspng-professor-stock-photography-5b218ab481d817.8727019215289248525319.jpg"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="text-md">
            <p className="text-gray-900 leading-none">Hector Velasco</p>
            <p className="text-gray-600">profesor</p>
          </div>
        </div>

        <h1 className="text-black font-black text-6xl">Mis Clases</h1>

        <div className="flex items-center shadow px-5   rounded-xl bg-white hover:border-2 border-indigo-600">
          <div className="text-md">
            <p className="text-gray-900 leading-none">Crear nueva clase</p>
          </div>
        </div>
      </div>

      {/*Clases */}
      <div>
        <div className="flex justify-around pb-10 pt-10">
          <ClaseCard titulo={"Ingles"} grado={1} grupo={"A"} />
          <ClaseCard titulo={"Matematicas"} grado={1} grupo={"D"} />
          <ClaseCard titulo={"Historia"} grado={2} grupo={"B"} />
        </div>

        <div className="flex justify-around">
          <ClaseCard titulo={"Ciencias"} grado={3} grupo={"A"} />
          <ClaseCard titulo={"Geografia"} grado={3} grupo={"C"} />
          <ClaseCard titulo={"Español"} grado={5} grupo={"D"} />
        </div>
      </div>
    </div>
  );
};

export default HomeProfe;
