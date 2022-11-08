import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";

import { Fragment } from "react";

import NuevaClaseMod from "../components/NuevaClaseMod";
import { useState } from "react";

const HomeMaestro = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  return (
    <Fragment>
      <div>
        <TopBar setShowClassModal={setShowClassModal} />

        <div className="flex justify-around pt-10">
          <h1 className="text-black font-black text-6xl">Mis Clases</h1>
        </div>

        <div className="flex flex-wrap justify-center xl:justify-start mt-10 ml-5">
          <ClaseCard titulo={"Ingles"} grado={1} grupo={"A"} />
          <ClaseCard titulo={"Matematicas"} grado={1} grupo={"D"} />
          <ClaseCard titulo={"Historia"} grado={2} grupo={"B"} />

          <ClaseCard titulo={"Ciencias"} grado={3} grupo={"A"} />
          <ClaseCard titulo={"Geografia"} grado={3} grupo={"C"} />
          <ClaseCard titulo={"Español"} grado={5} grupo={"D"} />
        </div>
      </div>
      <NuevaClaseMod
        isVisible={showClassModal}
        onClose={() => setShowClassModal(false)}
      >
        <form>
          <div className="mb-8 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-5"
              for="asignatura"
            >
              Ingrese el nombre de la asignatura
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="asignatura"
              type="text"
              placeholder="Matematicas"
            />
          </div>
          <div className="mb-6 flex justify-between">
            <div className="flex">
              <label
                className="block text-gray-700 text-sm font-bold pt-2 mr-5"
                for="grado"
              >
                Grado :
              </label>
              <input
                className="shadow appearance-none border  rounded w-3/12 p-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="grado"
                type="number"
                placeholder="2"
              />
              <p className="text-red-500 text-xs italic hidden">
                Porfavor añada un grado
              </p>
            </div>
            <div className="flex justify-end">
              <label
                className="block text-gray-700 text-sm font-bold pt-2 mr-5"
                for="grado"
              >
                Grupo :
              </label>
              <input
                className="shadow appearance-none border  rounded w-3/12 p-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="grupo"
                type="Text"
                placeholder="A"
              />
              <p className="text-red-500 text-xs italic hidden">
                Porfavor añada un grupo
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Crear clase
            </button>
          </div>
        </form>
      </NuevaClaseMod>
    </Fragment>
  );
};

export default HomeMaestro;
