import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";

import { useState } from "react";
//Redux
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const ListCards = ({ clasesRedux, toClase, sinClases }) => {
  return (
    <div className="flex flex-wrap  justify-center mt-10 ml-5">
      {sinClases !== "" && /*Poner diseño al texto*/ <>{sinClases}</>}
      {sinClases === "" && clasesRedux.length === 0 && (
        /*Poner un spinner*/ <>Cargando...</>
      )}
      {clasesRedux.map((clase) => (
        <div
          key={clase.grupo}
          onClick={() => {
            toClase(clase.grupo);
          }}
        >
          <ClaseCard grado={clase.grado} grupo={clase.grupo} />
        </div>
      ))}
    </div>
  );
};

const HomeMaestro = () => {
  const [sinClases, setSinClases] = useState("");
  const clasesRedux = useSelector((state) => state.clases);
  //Se obtiene el arreglo de las clases de la store

  const navigate = useNavigate();

  //Funcion onClick para navegar hacia las clases
  const toClase = (grupo) => {
    navigate(`${grupo}/alumnos`);
  };

  return (
    <>
      <TopBar />
      <div className="flex justify-center ml-5 pt-10">
        <h1 className="text-black font-black text-6xl">Mis Grupos</h1>
      </div>
      <ListCards
        clasesRedux={clasesRedux.clases}
        toClase={toClase}
        sinClases={sinClases}
      />
    </>
  );
};

export default HomeMaestro;
