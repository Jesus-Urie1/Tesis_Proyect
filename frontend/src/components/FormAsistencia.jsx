import { RiCheckDoubleFill, RiDraftLine } from "react-icons/ri";
import { useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { nuevaListaA } from "../store/Slices/Clases";
import { setNuevaListaA } from "../store/Slices/Clases";

const FormAsistencia = ({
  grupo,
  asistenciaOpcion,
  setAsistenciaOpcion,
  actitudesOpcion,
  setAlumnoSeleccionado,
  alumnoSeleccionado,
}) => {
  const [listaAsistencia, setFormAsistencia] = useState({});

  const redux = useSelector((state) => state.clases);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Se publica la lista
    const response = dispatch(
      nuevaListaA({
        grupo,
        lista: listaAsistencia,
      })
    );

    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setNuevaListaA(r.response.data));
      }
    });

    setFormAsistencia({});
    setAsistenciaOpcion(!asistenciaOpcion);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-1">
        <table className="w-full leading-normal  ">
          <thead className="bg-green-600 ">
            {/*Columnas del alumno */}
            <th className="px-3 py-3 rounded-l  text-center  text-xs font-semibold text-white uppercase tracking-wider ">
              No. cuenta
            </th>
            <th className=" text-center text-sm font-semibold text-white uppercase tracking-wider">
              Alumno
            </th>
            <th className="rounded-r text-center text-sm font-semibold text-white uppercase tracking-wider">
              Perfil
            </th>

            {/*Columna de lista de Asistencia*/}
            {asistenciaOpcion && (
              <th className="bg-green-600 py-2 rounded-r border-l-2 border-green-600 text-xs font-semibold text-green-700 uppercase tracking-wider">
                <div className="text-center text-white">
                  Asistencia
                  <div className="ml-4 text-white ">
                    <p>
                      <span className="text-white font-bold">Si</span> |{" "}
                      <span className="text-red-700 font-bold">No</span> |{" "}
                      <span className="text-gray-700 font-bold">Retardo</span>{" "}
                    </p>
                  </div>
                </div>
              </th>
            )}
          </thead>

          <tbody>
            {redux.alumnos.map((estudiante) => (
              <>
                {alumnoSeleccionado === estudiante.numCuenta ? (
                  <tr key={estudiante._id} className="bg-green-400 rounded">
                    <td className="p-5 border-b border-green-500  text-sm break-all whitespace-nowrap ">
                      <p className="text-gray-900 ">{estudiante.numCuenta}</p>
                    </td>
                    <td className="p-5 border-b border-green-500 text-sm break-all whitespace-nowrap">
                      <p className="text-gray-900 ">
                        {estudiante.nombre} {estudiante.apellidos}
                      </p>
                    </td>

                    {/*Actitudes de cada alumno */}
                    <td className="p-5 border-b border-green-500 text-sm break-all whitespace-nowrap flex flex-wrap">
                      {estudiante.actitudes.map((actitud) => {
                        if (actitud.tipo === "rojo") {
                          return (
                            <div className="mt-3 mr-2">
                              <button
                                className="px-3 py-1 font-semibold text-red-900 leading-tight bg-red-200 hover:bg-red-400 rounded-lg"
                                disabled
                              >
                                <span className="relative inline-block">
                                  {actitud.titulo}
                                  <span>{actitud.descripcion}</span>
                                </span>
                              </button>
                            </div>
                          );
                        }

                        if (actitud.tipo === "verde") {
                          return (
                            <div className="mt-3 mr-2 ">
                              <button
                                className="px-3 py-1 font-semibold text-green-900 leading-tight bg-green-200 hover:bg-green-400 rounded-lg"
                                disabled
                              >
                                <span>{actitud.titulo}</span>
                              </button>
                            </div>
                          );
                        }
                        if (actitud.tipo === "amarillo") {
                          return (
                            <div className="mt-3 mr-2">
                              <button
                                className="  px-3 py-1 font-semibold text-yellow-900 leading-tight bg-yellow-200 hover:bg-yellow-400 rounded-lg"
                                disabled
                              >
                                <span>{actitud.titulo}</span>
                              </button>
                            </div>
                          );
                        }
                      })}
                    </td>

                    {actitudesOpcion && (
                      <td>
                        <div
                          onChange={(e) =>
                            setAlumnoSeleccionado(e.target.value)
                          }
                          className="flex justify-end "
                        >
                          <input
                            required
                            id="id"
                            className=" w-5 h-5 ml-1 z-10 absolute opacity-0 peer cursor-pointer"
                            type="radio"
                            value={estudiante.numCuenta}
                            name="numCuenta"
                          />
                          <RiDraftLine className="w-5 h-5 ml-1 z-0 absolute peer-checked:text-white " />
                        </div>
                      </td>
                    )}

                    {/*Reactivos de la lista de asistencia*/}
                    {asistenciaOpcion && (
                      <td className=" p-5  border-b border-green-500 text-sm ">
                        <div
                          className="flex justify-center"
                          onChange={(e) => {
                            setFormAsistencia({
                              ...listaAsistencia,
                              [estudiante.numCuenta]: {
                                nombre: estudiante.nombre,
                                apellidos: estudiante.apellidos,
                                asistenciaOpcion: e.target.value,
                              },
                            });
                          }}
                        >
                          <div className="flex">
                            <label className="text-sm text-green-700 font-bold ">
                              Si
                              <input
                                required
                                className="ml-1 "
                                type="radio"
                                value="si"
                                name={estudiante.numCuenta}
                              />
                            </label>
                          </div>
                          <div>
                            <label className="text-sm text-red-700 font-bold">
                              No
                              <input
                                required
                                className="ml-1 "
                                type="radio"
                                value="no"
                                name={estudiante.numCuenta}
                              />
                            </label>
                          </div>
                          <div>
                            <label className="text-sm text-gray-700 font-bold">
                              R
                              <input
                                required
                                className="ml-1 "
                                type="radio"
                                value="r"
                                name={estudiante.numCuenta}
                              />
                            </label>
                          </div>
                        </div>
                      </td>
                    )}
                  </tr>
                ) : (
                  <tr key={estudiante._id}>
                    <td className="p-5 border-b border-green-500  text-sm break-all whitespace-nowrap ">
                      <p className="text-gray-900 ">{estudiante.numCuenta}</p>
                    </td>
                    <td className="p-5 border-b border-green-500 text-sm break-all whitespace-nowrap">
                      <p className="text-gray-900 ">
                        {estudiante.nombre} {estudiante.apellidos}
                      </p>
                    </td>

                    {/*Actitudes de cada alumno */}
                    <td className="p-5 border-b border-green-500 text-sm break-all whitespace-nowrap flex flex-wrap">
                      {estudiante.actitudes.map((actitud) => {
                        if (actitud.tipo === "rojo") {
                          return (
                            <div className="mt-3 mr-2">
                              <button
                                className="px-3 py-1 font-semibold text-red-900 leading-tight bg-red-200 hover:bg-red-400 rounded-lg"
                                disabled
                              >
                                <span>{actitud.titulo}</span>
                              </button>
                            </div>
                          );
                        }

                        if (actitud.tipo === "verde") {
                          return (
                            <div className="mt-3 mr-2 ">
                              <button
                                className="px-3 py-1 font-semibold text-green-900 leading-tight bg-green-200 hover:bg-green-400 rounded-lg"
                                disabled
                              >
                                <span>{actitud.titulo}</span>
                              </button>
                            </div>
                          );
                        }
                        if (actitud.tipo === "amarillo") {
                          return (
                            <div className="mt-3 mr-2">
                              <button
                                className="  px-3 py-1 font-semibold text-yellow-900 leading-tight bg-yellow-200 hover:bg-yellow-400 rounded-lg"
                                disabled
                              >
                                <span>{actitud.titulo}</span>
                              </button>
                            </div>
                          );
                        }
                      })}
                    </td>

                    {actitudesOpcion && (
                      <td>
                        <div
                          onChange={(e) =>
                            setAlumnoSeleccionado(e.target.value)
                          }
                          className="flex justify-end "
                        >
                          <input
                            required
                            id="id"
                            className=" w-5 h-5 ml-1 z-10 absolute opacity-0 peer cursor-pointer"
                            type="radio"
                            value={estudiante.numCuenta}
                            name="numCuenta"
                          />
                          <RiDraftLine className="w-5 h-5 ml-1 z-0 absolute peer-checked:text-white" />
                        </div>
                      </td>
                    )}

                    {/*Reactivos de la lista de asistencia*/}
                    {asistenciaOpcion && (
                      <td className=" p-5  border-b border-green-500 text-sm ">
                        <div
                          className="flex justify-center"
                          onChange={(e) => {
                            setFormAsistencia({
                              ...listaAsistencia,
                              [estudiante.numCuenta]: {
                                nombre: estudiante.nombre,
                                apellidos: estudiante.apellidos,
                                asistenciaOpcion: e.target.value,
                              },
                            });
                          }}
                        >
                          <div className="flex">
                            <label className="text-sm text-green-700 font-bold ">
                              Si
                              <input
                                required
                                className="ml-1 "
                                type="radio"
                                value="si"
                                name={estudiante.numCuenta}
                              />
                            </label>
                          </div>
                          <div>
                            <label className="text-sm text-red-700 font-bold">
                              No
                              <input
                                required
                                className="ml-1 "
                                type="radio"
                                value="no"
                                name={estudiante.numCuenta}
                              />
                            </label>
                          </div>
                          <div>
                            <label className="text-sm text-gray-700 font-bold">
                              R
                              <input
                                required
                                className="ml-1 "
                                type="radio"
                                value="r"
                                name={estudiante.numCuenta}
                              />
                            </label>
                          </div>
                        </div>
                      </td>
                    )}
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>

        {asistenciaOpcion && (
          <div className="flex justify-end items-center mt-3">
            <button
              className="hover:border-black border-2 text-black mr-3 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => setAsistenciaOpcion(!asistenciaOpcion)}
            >
              Cancelar
            </button>
            <button
              className="flex justify-center items-center bg-green-600 rounded-md text-white p-2 hover:bg-green-500 mr-3"
              type="submit"
            >
              Terminar
              <RiCheckDoubleFill className="w-5 h-5 ml-1" />
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default FormAsistencia;
