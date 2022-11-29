import TopBar from "../components/TopBar";
import Nuevo from "../components/Nuevo";
import Modal from "../components/Modal";
import { useState } from "react";

const HomeAdmin = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  const handleCloseModal = () => setShowClassModal(false);

  return (
    <>
      <div>
        <TopBar setShowClassModal={setShowClassModal} />
        <div className="flex ml-5 pt-10">
          <h1 className="text-black font-black text-6xl">Grupos</h1>
        </div>
      </div>
      <Modal isVisible={showClassModal} onClose={handleCloseModal}>
        <Nuevo />
      </Modal>
    </>
  );
};

export default HomeAdmin;
