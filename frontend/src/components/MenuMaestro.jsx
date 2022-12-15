import { RiUserSharedFill, RiTeamFill } from "react-icons/ri";
import { useState } from "react";
import Modal from "./Modal";
import EntrarGrupo from "./EntrarGrupo";
import NuevoGrupo from "./NuevoGrupo";
const MenuMaestro = ({ onClose2 }) => {
  const [showModalGrupo, setShowModalGrupo] = useState(false);
  const [showModalEntrarGrupo, setShowModalEntrarGrupo] = useState(false);

  const handleCloseModalGrupo = () => setShowModalGrupo(false);
  const handleCloseModalEntrarGrupo = () => setShowModalEntrarGrupo(false);
  return (
    <>
      <div className="flex items-center justify-center p-10">
        <div
          className="text-green-700 hover:text-green-600 mr-5 text-center font-bold cursor-pointer"
          onClick={() => setShowModalEntrarGrupo(true)}
        >
          <RiUserSharedFill className="  h-40 w-40" />
          <p>Entrar a una Clase</p>
        </div>
        <div
          className="text-green-700 hover:text-green-600 text-center font-bold cursor-pointer"
          onClick={() => setShowModalGrupo(true)}
        >
          <RiTeamFill className="h-40 w-40" />
          <p>Nuevo Grupo</p>
        </div>
      </div>
      <Modal isVisible={showModalGrupo} onClose={handleCloseModalGrupo}>
        <NuevoGrupo onClose={handleCloseModalGrupo} />
      </Modal>
      <Modal
        isVisible={showModalEntrarGrupo}
        onClose={handleCloseModalEntrarGrupo}
      >
        <EntrarGrupo
          onClose2={onClose2}
          onClose={handleCloseModalEntrarGrupo}
        />
      </Modal>
    </>
  );
};

export default MenuMaestro;
