import React from "react";
import TopBar from "../components/TopBar";

const HomeProfe = () => {
  return (
    <div>
      <TopBar />

      <div className="flex justify-around pt-10">
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

        <div className="flex items-center shadow px-5  rounded-xl bg-white hover:border-2 border-indigo-600">
          <div className="text-md">
            <p className="text-gray-900 leading-none">Crear nueva clase</p>
          </div>
        </div>
      </div>

      {/*Clases */}
    </div>
  );
};

export default HomeProfe;
/*<div className="flex items-center bg-gray-200">
      <img className="w-10 h-10 rounded-full mr-4" src="https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fmag.elcomercio.pe%2Ffama%2Fel-chavo-del-8-el-verdadero-origen-del-profesor-jirafales-ruben-aguirre-los-supergenios-de-la-mesa-cuadrada-series-mexico-mx-nnda-nnlt-noticia%2F&psig=AOvVaw2im8ipEWVBDZC-A349uX3L&ust=1665463021315000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCODZr7Hr1PoCFQAAAAAdAAAAABAO" alt="Avatar of Jonathan Reinink">
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
        </div>
      </div>*/
