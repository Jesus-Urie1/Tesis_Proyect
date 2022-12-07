import { RiUser2Fill, RiUserAddFill, RiTeamFill } from "react-icons/ri";
import { useState } from "react";
import Modal from "./Modal";
import FormEstudiante from "./FormEstudiante";
import FormMaestro from "./FormMaestro";
const Nuevo = () => {
  const [showModalEstudiante, setShowModalEstudiante] = useState(false);
  const [showModalMaestro, setShowModalMaestro] = useState(false);

  const handleCloseModalEstudiante = () => setShowModalEstudiante(false);
  const handleCloseModalMaestro = () => setShowModalMaestro(false);
  return (
    <>
      <div className="flex items-center justify-center p-10">
        <div
          className="text-green-700 hover:text-green-600 mr-5 text-center font-bold cursor-pointer"
          onClick={() => setShowModalEstudiante(true)}
        >
          <RiUserAddFill className=" h-40 w-40" />
          <p>Nuevo Alumno</p>
        </div>
        <div
          className="text-green-700 hover:text-green-600 mr-5 text-center font-bold cursor-pointer"
          onClick={() => setShowModalMaestro(true)}
        >
          <RiUser2Fill className="  h-40 w-40" />
          <p>Nuevo Maestro</p>
        </div>
        <div className="text-green-700 hover:text-green-600 text-center font-bold cursor-pointer">
          <RiTeamFill className="h-40 w-40" />
          <p>Nuevo Grupo</p>
        </div>
      </div>
      <Modal
        isVisible={showModalEstudiante}
        onClose={handleCloseModalEstudiante}
      >
        <FormEstudiante onClose={handleCloseModalEstudiante} />
      </Modal>
      <Modal isVisible={showModalMaestro} onClose={handleCloseModalMaestro}>
        <FormMaestro onClose={handleCloseModalMaestro} />
      </Modal>
    </>
  );
};

export default Nuevo;
