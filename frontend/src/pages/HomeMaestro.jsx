import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";
import NuevaClase from "../components/NuevaClase";
import NuevaClaseMod from "../components/NuevaClaseMod";
import { useState, useEffect, useMemo } from "react";
import clientesAxios from "../config/axios";
import { useNavigate } from "react-router-dom";
import shallow from "zustand/shallow";
import useClasesStore from "./useClasesStore";
import useFetch from "../hooks/useFetch";

const ListCards = ({ clasesMemo, loading, toClase }) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start mt-10 ml-5">
      {clasesMemo.length === 0 && loading && <>Esta cargando...</>}
      {clasesMemo.map((clase) => (
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
  const [clases, setClases] = useClasesStore(
    (state) => [state.clases, state.setClases],
    shallow
  );
  const clasesMemo = useMemo(() => clases, [clases]);
  const navigate = useNavigate();
  const url = "/obtenerClases";
  const { data, loading } = useFetch(url);

  useEffect(() => {
    if (data) setClases(data);
  }, [data]);

  const toClase = (codigo) => {
    navigate(`salonDeClases/${codigo}`);
  };

  const handleCloseModal = () => setShowClassModal(false);
  return (
    <>
      <div>
        <TopBar setShowClassModal={setShowClassModal} />
        <div className="flex justify-around pt-10">
          <h1 className="text-black font-black text-6xl">Mis Clases</h1>
        </div>
        <ListCards
          clasesMemo={clasesMemo}
          loading={loading}
          toClase={toClase}
        />
      </div>
      <NuevaClaseMod isVisible={showClassModal} onClose={handleCloseModal}>
        <NuevaClase />
      </NuevaClaseMod>
    </>
  );
};

export default HomeMaestro;
