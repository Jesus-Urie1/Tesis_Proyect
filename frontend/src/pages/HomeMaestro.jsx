import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";
import NuevaClase from "../components/NuevaClase";
import NuevaClaseMod from "../components/NuevaClaseMod";
import { useState, useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerClases } from "../store/Slices/Clases";

import { useNavigate } from "react-router-dom";

const ListCards = ({ clasesRedux, toClase }) => {
  return (
    <div className="flex flex-wrap md:justify-start justify-center mt-10 ml-5">
      {clasesRedux.length === 0 && <>Esta cargando...</>}
      {clasesRedux.map((clase) => (
        <div
          key={clase.codigo}
          onClick={() => {
            toClase(clase.codigo);
          }}
        >
          <ClaseCard
            titulo={clase.nombre}
            grado={clase.grado}
            grupo={clase.grupo}
          />
        </div>
      ))}
    </div>
  );
};

const HomeMaestro = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  const clasesRedux = useSelector((state) => state.clases);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerClases());
  }, [dispatch]);

  const toClase = (codigo) => {
    navigate(`salonDeClases/${codigo}`);
  };

  const handleCloseModal = () => setShowClassModal(false);

  return (
    <>
      <div>
        <TopBar setShowClassModal={setShowClassModal} />
        <div className="flex ml-5 pt-10">
          <h1 className="text-black font-black text-6xl">Mis Clases</h1>
        </div>
        <ListCards clasesRedux={clasesRedux.clases} toClase={toClase} />
      </div>
      <NuevaClaseMod isVisible={showClassModal} onClose={handleCloseModal}>
        <NuevaClase />
      </NuevaClaseMod>
    </>
  );
};

export default HomeMaestro;
