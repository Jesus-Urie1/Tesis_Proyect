import { RiUser2Fill, RiUserAddFill, RiTeamFill } from "react-icons/ri";
import { useState } from "react";
import Modal from "./Modal";
import FormEstudiante from "./FormEstudiante";
const Nuevo = () => {
  const [showModalEstudiante, setShowModalEstudiante] = useState(false);

  const handleCloseModal = () => setShowModalEstudiante(false);
  return (
    <>
      <div className="flex items-center justify-center p-10">
        <div
          className="text-green-700 hover:text-green-600 mr-5 text-center font-bold cursor-pointer"
          onClick={() => setShowModalEstudiante(true)}
        >
          <RiUserAddFill className=" h-40 w-40" />
          <p className="">Nuevo Estudiante</p>
        </div>
        <div className="text-green-700 hover:text-green-600 mr-5 text-center font-bold cursor-pointer">
          <RiUser2Fill className="  h-40 w-40" />
          <p>Nuevo Maestro</p>
        </div>
        <div className="text-green-700 hover:text-green-600 text-center font-bold cursor-pointer">
          <RiTeamFill className="h-40 w-40" />
          <p>Nuevo Grupo</p>
        </div>
      </div>
      <Modal isVisible={showModalEstudiante} onClose={handleCloseModal}>
        <FormEstudiante />
      </Modal>
    </>
  );
};

export default Nuevo;
