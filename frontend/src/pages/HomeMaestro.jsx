import TopBar from "../components/TopBar";
import MenuMaestro from "../components/MenuMaestro";
import Modal from "../components/Modal";
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
  const [showClassModal, setShowClassModal] = useState(false);

  const handleCloseModal = () => setShowClassModal(false);
  const [sinClases, setSinClases] = useState("");
  const redux = useSelector((state) => state.maestro);
  //Se obtiene el arreglo de las clases de la store

  const navigate = useNavigate();

  //Funcion onClick para navegar hacia las clases
  const toClase = (grupo) => {
    navigate(`${grupo}/alumnos`);
  };

  return (
    <>
      <TopBar setShowClassModal={setShowClassModal} />
      <div className="flex justify-center ml-5 pt-10">
        <h1 className="text-black font-black text-6xl">Mis Grupos</h1>
      </div>
      {redux.grupos.length === 0 ? (
        <div className="flex justify-center items-center p-5 text-5xl">
          <p className="text-green-700 font-bold">
            No tienes grupos registrados!
          </p>
        </div>
      ) : (
        <ListCards
          clasesRedux={redux.grupos}
          toClase={toClase}
          sinClases={sinClases}
        />
      )}
      <Modal isVisible={showClassModal} onClose={handleCloseModal}>
        <MenuMaestro onClose2={handleCloseModal} />
      </Modal>
    </>
  );
};

export default HomeMaestro;
