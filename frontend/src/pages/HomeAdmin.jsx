import TopBar from "../components/TopBar";
import Nuevo from "../components/Nuevo";
import Modal from "../components/Modal";
import { useState } from "react";
//Redux
import { useSelector } from "react-redux";
const HomeAdmin = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  const handleCloseModal = () => setShowClassModal(false);
  const redux = useSelector((state) => state.clases);
  console.log(redux);
  return (
    <>
      <div>
        <TopBar setShowClassModal={setShowClassModal} />
      </div>
      {typeof redux.maestros === "string" ? (
        <div className="flex justify-center items-center p-5 text-5xl">
          <p className="text-green-700 font-bold">{redux.maestros}</p>
        </div>
      ) : (
        <div className="flex justify-center items-center pt-5 px-10 min-w-full">
          <table className="w-3/5 mr-5">
            <thead className="">
              <th className="rounded-l text-2xl bg-green-700 text-white">
                No. Cuenta
              </th>
              <th className=" text-2xl bg-green-700 text-white">Maestros</th>
              <th className="rounded-r text-2xl bg-green-700 text-white">
                Email
              </th>
            </thead>
            <tbody className="text-center">
              {redux.maestros.map((maestro) => (
                <tr className="border-2 hover:bg-gray-200">
                  <td className="border-b-2">{maestro.numCuenta}</td>
                  <td className="uppercase">
                    {maestro.nombre} {maestro.apellidos}
                  </td>
                  <td className="lowercase">{maestro.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {typeof redux.alumnos === "string" ? (
        <div className="flex justify-center items-center p-5 text-5xl">
          <p className="text-green-700 font-bold">{redux.alumnos}</p>
        </div>
      ) : (
        <div className="flex justify-center items-center pt-5 px-10 min-w-full">
          <table className="w-2/5 mr-5">
            <th className="text-2xl rounded-l bg-green-700 text-white">
              No. Cuenta
            </th>
            <th className="text-2xl rounded-r bg-green-700 text-white">
              Alumnos
            </th>
            <tbody className="text-center ">
              {redux.alumnos.map((alumno) => (
                <tr className="border-2 hover:bg-gray-200">
                  <td>{alumno.numCuenta}</td>
                  <td className="uppercase">
                    {alumno.nombre} {alumno.apellidos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {typeof redux.grupos === "string" ? (
        <div className="flex justify-center items-center p-5 text-5xl">
          <p className="text-green-700 font-bold">{redux.grupos}</p>
        </div>
      ) : (
        <div className="flex justify-center items-center pt-5 px-10 min-w-full">
          <table className="w-1/5 ">
            <th className="text-2xl rounded bg-green-700 text-white">Grupos</th>
            <tbody className="text-center">
              {redux.grupos.map((grupo) => (
                <tr>
                  <td className="border-2 hover:bg-gray-200">{grupo.grupo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal isVisible={showClassModal} onClose={handleCloseModal}>
        <Nuevo />
      </Modal>
    </>
  );
};

export default HomeAdmin;
