import { useState } from "react";
import { RiPencilFill, RiDraftLine } from "react-icons/ri";
import Modal from "./Modal";
import NuevaActitud from "./NuevaActitud";
import useAuth from "../hooks/useAuth";

//Redux
import { useSelector } from "react-redux";

import FormAsistencia from "./FormAsistencia";
import FormActitudes from "./FormActitudes";

const TablaAlumnos = ({ estudiantes, grupo }) => {
  //Modal
  const [showClassModal, setShowClassModal] = useState(false);
  const handleCloseModal = () => setShowClassModal(false);

  const [asistenciaOpcion, setAsistenciaOpcion] = useState(false);
  const [actitudesOpcion, setActitudesOpcion] = useState(false);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(0);

  const { auth } = useAuth();
  let grupoActual;
  let maestro;

  const infoGrupoRedux = useSelector((state) => state.clases);

  if (infoGrupoRedux) {
    grupoActual = infoGrupoRedux.clases.filter((clase) => {
      if (clase.grupo === grupo) return clase;
    });
  }

  const maestros = grupoActual[0].maestros;
  if (maestros) {
    maestro = maestros.filter((m) => {
      return m._id === auth._id;
    });
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-9/12">
          <div>
            <p className="font-bold text-green-700 text-lg">
              Alumnos: {estudiantes.length}
            </p>
          </div>

          {/*Botones de Tomar asistencia y Tomar Actitudes*/}
          <div className="flex items-center justify-end">
            {!asistenciaOpcion && !actitudesOpcion && (
              <button
                className="flex justify-center items-center bg-green-600 rounded-md text-white p-2 hover:bg-green-500 mr-3"
                onClick={() => setAsistenciaOpcion(!asistenciaOpcion)}
              >
                Tomar Asistencia
                <RiPencilFill className="w-5 h-5 ml-1" />
              </button>
            )}
            {!actitudesOpcion && !asistenciaOpcion && (
              <button
                className="flex justify-center items-center bg-green-600 rounded-md text-white p-2 hover:bg-green-500 mr-3"
                onClick={() => setActitudesOpcion(!actitudesOpcion)}
              >
                Tomar Actitudes
                <RiDraftLine className="w-5 h-5 ml-1" />
              </button>
            )}
          </div>

          <FormAsistencia
            grupo={grupo}
            asistenciaOpcion={asistenciaOpcion}
            setAsistenciaOpcion={setAsistenciaOpcion}
            actitudesOpcion={actitudesOpcion}
            setAlumnoSeleccionado={setAlumnoSeleccionado}
            alumnoSeleccionado={alumnoSeleccionado}
          />
        </div>
        <FormActitudes
          actitudesOpcion={actitudesOpcion}
          actitudes={maestro[0].actitudes}
          setShowClassModal={setShowClassModal}
          setActitudesOpcion={setActitudesOpcion}
          alumnoSeleccionado={alumnoSeleccionado}
        />
      </div>
      <Modal isVisible={showClassModal} onClose={handleCloseModal}>
        <NuevaActitud grupo={grupo} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default TablaAlumnos;
