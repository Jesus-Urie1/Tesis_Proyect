import TopBar from "../components/TopBar";
import MenuAdmin from "../components/HomeAdmin/MenuAdmin";
import Modal from "../components/Modal";
import { useState } from "react";
//Redux
import { useSelector } from "react-redux";

import TablaAlumnos from "../components/HomeAdmin/TablaAlumnos";
import TablaMaestros from "../components/HomeAdmin/TablaMaestros";

const HomeAdmin = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  //Obtener datos de redux
  const usuario = useSelector((state) => state.usuario);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-20">
        <TopBar setShowClassModal={setShowClassModal} />
      </div>
      {/*Comprobar si el usuario tiene grupos*/}
      {usuario.grupos.length === 0 ? (
        <div className="flex justify-center items-center p-5 text-5xl">
          <p className="text-green-700 font-bold">No existe grupos creados!</p>
        </div>
      ) : (
        <div className="py-16">
          <TablaAlumnos alumnos={usuario.alumnos} />
          <TablaMaestros maestros={usuario.maestros} />
        </div>
      )}

      <Modal
        isVisible={showClassModal}
        onClose={() => setShowClassModal(false)}
      >
        {/*Modal del Menu Admin*/}
        <MenuAdmin />
      </Modal>
    </div>
  );
};

export default HomeAdmin;
