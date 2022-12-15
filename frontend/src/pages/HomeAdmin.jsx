import TopBar from "../components/TopBar";
import MenuAdmin from "../components/MenuAdmin";
import Modal from "../components/Modal";
import { useState } from "react";
//Redux
import { useSelector } from "react-redux";
const HomeAdmin = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  const handleCloseModal = () => setShowClassModal(false);
  const redux = useSelector((state) => state.admin);

  return (
    <>
      <div>
        <TopBar setShowClassModal={setShowClassModal} />
      </div>
      {redux.grupos.length === 0 ? (
        <div className="flex justify-center items-center p-5 text-5xl">
          <p className="text-green-700 font-bold">No existe grupos creados!</p>
        </div>
      ) : (
        <div className="flex justify-center items-center p-5 text-5xl">
          <p className="text-green-700 font-bold">Aqui van todos los grupos</p>
        </div>
      )}

      <Modal isVisible={showClassModal} onClose={handleCloseModal}>
        <MenuAdmin />
      </Modal>
    </>
  );
};

export default HomeAdmin;
