import { RiUser2Fill, RiTeamFill } from "react-icons/ri";
import { useState } from "react";
import Modal from "../Modal";
import NuevoMaestro from "../NuevoMaestro";
import NuevoGrupo from "../NuevoGrupo";
const MenuAdmin = () => {
  const [showModalGrupo, setShowModalGrupo] = useState(false);
  const [showModalMaestro, setShowModalMaestro] = useState(false);

  return (
    <>
      {/*Menu admin*/}
      <div className="flex items-center justify-center p-10">
        <div
          className="text-green-700 hover:text-green-600 mr-5 text-center font-bold cursor-pointer"
          onClick={() => setShowModalMaestro(true)}
        >
          <RiUser2Fill className="  h-40 w-40" />
          <p>Registrar Maestros</p>
        </div>
        <div
          className="text-green-700 hover:text-green-600 text-center font-bold cursor-pointer"
          onClick={() => setShowModalGrupo(true)}
        >
          <RiTeamFill className="h-40 w-40" />
          <p>Nuevo Grupo</p>
        </div>
      </div>
      <Modal
        isVisible={showModalGrupo}
        onClose={() => setShowModalGrupo(false)}
      >
        {/*Modal para crear nuevo grupo */}
        <NuevoGrupo onClose={() => setShowModalGrupo(false)} />
      </Modal>
      <Modal
        isVisible={showModalMaestro}
        onClose={() => setShowModalMaestro(false)}
      >
        {/*Modal para agregar nuevos maestros */}
        <NuevoMaestro onClose={() => setShowModalMaestro(false)} />
      </Modal>
    </>
  );
};

export default MenuAdmin;
