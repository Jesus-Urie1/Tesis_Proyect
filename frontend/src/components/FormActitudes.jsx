import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";

//Redux
import { useDispatch } from "react-redux";
import { agregarActitud } from "../store/Slices/Clases";
import { setAgregarActitud } from "../store/Slices/Clases";
const FormActitudes = ({
  actitudesOpcion,
  actitudes,
  setShowClassModal,
  setActitudesOpcion,
  alumnoSeleccionado,
}) => {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = dispatch(
      agregarActitud({
        tipo,
        titulo,
        descripcion,
        numCuenta: alumnoSeleccionado,
      })
    );

    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setAgregarActitud(r.response.data));
      }
    });
  };
  return (
    <>
      {actitudesOpcion && (
        <div className="w-1/4 ml-10 text-center">
          <form onSubmit={handleSubmit}>
            {alumnoSeleccionado !== 0 ? (
              <p className="pb-4 text-green-800 font-bold text-xl">
                {"Selecciona las actitudes:"}
              </p>
            ) : (
              <p className="pb-4 text-green-700 font-bold text-xl">
                {"<- Selecciona un alumno"}
              </p>
            )}
            <div className=" min-w-full shadow-md rounded-lg ">
              <table className="min-w-full leading-normal ">
                <thead className="bg-green-600 ">
                  <tr>
                    <th className=" px-5 py-3 rounded text-center border-gray-200  text-sm font-semibold text-white uppercase tracking-wider ">
                      Actitudes
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {actitudes.map((actitud) => {
                    if (actitud.tipo === "rojo") {
                      return (
                        <tr>
                          <div className="mt-3">
                            <button
                              className="  px-3 py-1 font-semibold text-red-900 leading-tight bg-red-200 hover:bg-red-400 rounded-lg"
                              onClick={() => {
                                setTitulo(actitud.titulo),
                                  setTipo(actitud.tipo),
                                  setDescripcion(actitud.descripcion);
                              }}
                              type="submit"
                            >
                              <span>{actitud.titulo}</span>
                            </button>
                          </div>
                        </tr>
                      );
                    }
                    if (actitud.tipo === "verde") {
                      return (
                        <tr>
                          <div className="mt-3">
                            <button
                              className="  px-3 py-1 font-semibold text-green-900 leading-tight bg-green-200 hover:bg-green-400 rounded-lg"
                              onClick={() => {
                                setTitulo(actitud.titulo),
                                  setTipo(actitud.tipo),
                                  setDescripcion(actitud.descripcion);
                              }}
                              type="submit"
                            >
                              <span>{actitud.titulo}</span>
                            </button>
                          </div>
                        </tr>
                      );
                    }
                    if (actitud.tipo === "amarillo") {
                      return (
                        <tr>
                          <div className="mt-3">
                            <button
                              className="  px-3 py-1 font-semibold text-yellow-900 leading-tight bg-yellow-200 hover:bg-yellow-400 rounded-lg"
                              onClick={() => {
                                setTitulo(actitud.titulo),
                                  setTipo(actitud.tipo),
                                  setDescripcion(actitud.descripcion);
                              }}
                              type="submit"
                            >
                              <span>{actitud.titulo}</span>
                            </button>
                          </div>
                        </tr>
                      );
                    }
                  })}

                  <tr>
                    <div
                      className="mt-3 mb-3 flex justify-center items-center text-green-700 hover:text-green-600 cursor-pointer"
                      onClick={() => setShowClassModal(true)}
                    >
                      <RiAddCircleLine className="h-10 w-10" />
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
          <button
            className="hover:bg-green-500  text-white mt-5 py-2 px-20 font-bold rounded-lg focus:outline-none focus:shadow-outline bg-green-600"
            onClick={() => setActitudesOpcion(!actitudesOpcion)}
          >
            Salir
          </button>
        </div>
      )}
    </>
  );
};

export default FormActitudes;
