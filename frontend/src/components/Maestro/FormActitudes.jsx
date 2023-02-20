import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import Modal from "../Modal";
import NuevaActitud from "../NuevaActitud";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { agregarConductaAlumno } from "../../store/Slices/Maestros";
import { setAgregarConductaAlumno } from "../../store/Slices/Maestros";
const FormActitudes = ({ alumnoSeleccionado, grupo }) => {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  //Modal
  const [showClassModal, setShowClassModal] = useState(false);
  const handleCloseModal = () => setShowClassModal(false);

  const dispatch = useDispatch();

  //Se obtiene el arreglo de las clases de la store
  const redux = useSelector((state) => state.usuario);
  const token = localStorage.getItem("token");
  const handleSubmit = (e) => {
    e.preventDefault();

    const response = dispatch(
      agregarConductaAlumno(
        {
          tipo,
          titulo,
          descripcion,
          email: alumnoSeleccionado,
          emailMaestro: redux.auth.email,
        },
        token
      )
    );

    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setAgregarConductaAlumno(r.response.data));
      }
    });
  };

  return (
    <>
      <div className="w-1/5 ml-10 text-center">
        <form onSubmit={handleSubmit}>
          {alumnoSeleccionado !== "" ? (
            <p className="pb-4 text-green-800 font-bold text-xl">
              {"Selecciona las conductas:"}
            </p>
          ) : (
            <p className="pb-4 text-green-700 font-bold text-xl">
              {"<- Selecciona un alumno"}
            </p>
          )}
          <div className=" min-w-full shadow-xl rounded-lg ">
            <table className="min-w-full leading-normal ">
              <thead className="bg-gradient-to-r from-green-700 to-lime-600 ">
                <tr>
                  <th className=" px-5 py-3 rounded text-center border-gray-200  text-sm font-semibold text-white uppercase tracking-wider ">
                    Conductas
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="flex flex-col">
                  {redux.auth.conductas !== undefined &&
                    redux.auth.conductas.map((conducta, index) => {
                      if (
                        conducta.tipo === "red" &&
                        alumnoSeleccionado !== ""
                      ) {
                        return (
                          <td className="mt-3" key={index}>
                            <button
                              className="  px-3 py-1 font-semibold text-white leading-tight bg-red-700 hover:bg-red-400 rounded-lg"
                              onClick={() => {
                                setTitulo(conducta.titulo),
                                  setTipo(conducta.tipo),
                                  setDescripcion(conducta.descripcion);
                              }}
                              type="submit"
                            >
                              <span>{conducta.titulo}</span>
                            </button>
                          </td>
                        );
                      } else if (conducta.tipo === "red") {
                        return (
                          <td className="mt-3" key={index}>
                            <button
                              className="px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-red-700 to-red-600 rounded-lg"
                              disabled
                            >
                              <span>{conducta.titulo}</span>
                            </button>
                          </td>
                        );
                      }
                      if (
                        conducta.tipo === "green" &&
                        alumnoSeleccionado !== ""
                      ) {
                        return (
                          <td className="mt-3" key={index}>
                            <button
                              className="  px-3 py-1 font-semibold text-white leading-tight bg-green-700 hover:bg-green-500 rounded-lg"
                              onClick={() => {
                                setTitulo(conducta.titulo),
                                  setTipo(conducta.tipo),
                                  setDescripcion(conducta.descripcion);
                              }}
                              type="submit"
                            >
                              <span>{conducta.titulo}</span>
                            </button>
                          </td>
                        );
                      } else if (conducta.tipo === "green") {
                        return (
                          <td className="mt-3" key={index}>
                            <button
                              className="px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-green-700 to-green-600 rounded-lg"
                              disabled
                            >
                              <span>{conducta.titulo}</span>
                            </button>
                          </td>
                        );
                      }
                      if (
                        conducta.tipo === "blue" &&
                        alumnoSeleccionado !== ""
                      ) {
                        return (
                          <td className="mt-3" key={index}>
                            <button
                              className="  px-3 py-1 font-semibold text-white leading-tight bg-sky-700 hover:bg-cyan-500 rounded-lg"
                              onClick={() => {
                                setTitulo(conducta.titulo),
                                  setTipo(conducta.tipo),
                                  setDescripcion(conducta.descripcion);
                              }}
                              type="submit"
                            >
                              <span>{conducta.titulo}</span>
                            </button>
                          </td>
                        );
                      } else if (conducta.tipo === "blue") {
                        return (
                          <td className="mt-3" key={index}>
                            <button
                              className="px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-blue-700 to-cyan-700 rounded-lg"
                              disabled
                            >
                              <span>{conducta.titulo}</span>
                            </button>
                          </td>
                        );
                      }
                    })}
                </tr>
                <tr>
                  <td
                    className="mt-3 mb-3 flex justify-center items-center text-green-700 hover:text-green-600 cursor-pointer"
                    onClick={() => setShowClassModal(true)}
                  >
                    <RiAddCircleLine className="h-10 w-10" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <Modal isVisible={showClassModal} onClose={handleCloseModal}>
          <NuevaActitud grupo={grupo} onClose={handleCloseModal} />
        </Modal>
      </div>
    </>
  );
};

export default FormActitudes;
