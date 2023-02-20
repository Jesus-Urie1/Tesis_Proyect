import TopBar from "../../components/TopBar";
import MenuMaestro from "../../components/Maestro/HomeMaestro/MenuMaestro";
import Modal from "../../components/Modal";

import { useState } from "react";
//Redux
import { useSelector } from "react-redux";

import ListGrupos from "../../components/Maestro/HomeMaestro/ListGrupos";

const HomeMaestro = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  const usuario = useSelector((state) => state.usuario);

  if (usuario.auth.length === 0) return "Cargando...";

  return (
    <>
      <TopBar setShowClassModal={setShowClassModal} />
      <div className="flex justify-center ml-5 pt-10">
        <h1 className="text-black font-black text-6xl">Mis Grupos</h1>
      </div>
      {usuario.grupos.length === 0 ? (
        <div className="flex justify-center items-center p-5 text-5xl">
          <p className="text-green-700 font-bold">
            No tienes grupos registrados!
          </p>
        </div>
      ) : (
        <ListGrupos grupos={usuario.grupos} />
      )}

      <Modal
        isVisible={showClassModal}
        onClose={() => setShowClassModal(false)}
      >
        <MenuMaestro onClose2={() => setShowClassModal(false)} />
      </Modal>
    </>
  );
};

export default HomeMaestro;
