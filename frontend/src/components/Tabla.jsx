import { useState } from "react";
import { useEffect } from "react";
import { RiDraftLine } from "react-icons/ri";

//Redux
import { useSelector } from "react-redux";

const Tabla = ({ setAlumnoSeleccionado }) => {
  const [alumnos, setAlumnos] = useState([]);
  const redux = useSelector((state) => state.maestro);

  const SortArray = (x, y) => {
    if (x.nombre < y.nombre) {
      return -1;
    }
    if (x.nombre > y.nombre) {
      return 1;
    }
    return 0;
  };

  // if (redux.alumnos.length !== 0 && alumnos.length === 0) {
  //   const alumnosOrdenados = [...redux.alumnos].sort(SortArray);

  //   setAlumnos(alumnosOrdenados);
  // }

  return (
    <form>
      <div className="py-1 ">
        <table className="w-full leading-normal  ">
          <thead className="bg-gradient-to-r from-green-700 to-lime-600 ">
            {/*Columnas del alumno */}

            <th className="w-1/3 p-2 rounded-l text-center text-sm font-semibold text-white uppercase tracking-wider">
              Alumno
            </th>
            <th className="w-2/3 rounded-r text-center text-sm font-semibold text-white uppercase tracking-wider">
              Conductas
            </th>
          </thead>

          <tbody className="">
            {redux.alumnos.length !== 0 &&
              redux.alumnos.map((alumno) => (
                <tr key={alumno._id}>
                  <td className=" border-b border-green-500 text-sm break-all whitespace-nowrap">
                    <p className="text-gray-900 text-center ">
                      {alumno.nombre}
                    </p>
                  </td>

                  {/*conductas de cada alumno */}
                  <td className="p-7 border-b border-green-500 text-sm break-all whitespace-nowrap ">
                    <div className="flex flex-wrap">
                      {alumno.conductas.map((conducta) => {
                        if (
                          conducta.tipo === "red" &&
                          conducta.maestro === redux.auth.email
                        ) {
                          return (
                            <div className="mt-3 mr-2 ">
                              <button
                                className="px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-red-700 to-red-600 rounded-lg"
                                disabled
                              >
                                <span
                                  data1-title={conducta.descripcion}
                                  className="hover:before:content-[attr(data1-title)] before:absolute  before:bg-gradient-to-r from-red-700 to-red-600 before:-mt-10 
                                  before:p-2 before:rounded before:invisible hover:before:visible"
                                >
                                  {conducta.titulo}
                                </span>
                              </button>
                            </div>
                          );
                        }

                        if (
                          conducta.tipo === "green" &&
                          conducta.maestro === redux.auth.email
                        ) {
                          return (
                            <div className="mt-3 mr-2 ">
                              <button
                                className="px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-green-700 to-lime-600 rounded-lg"
                                disabled
                              >
                                <span
                                  data2-title={conducta.descripcion}
                                  className="hover:before:content-[attr(data2-title)] before:absolute  before:bg-gradient-to-r from-green-700 to-lime-600 before:-mt-10 
                                  before:p-2 before:rounded before:invisible hover:before:visible"
                                >
                                  {conducta.titulo}
                                </span>
                              </button>
                            </div>
                          );
                        }
                        if (
                          conducta.tipo === "blue" &&
                          conducta.maestro === redux.auth.email
                        ) {
                          return (
                            <div className="mt-3 mr-2">
                              <button
                                className="  px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-cyan-700 to-cyan-600 rounded-lg"
                                disabled
                              >
                                <span
                                  data3-title={conducta.descripcion}
                                  className="hover:before:content-[attr(data3-title)] before:absolute  before:bg-gradient-to-r from-cyan-700 to-cyan-600 before:-mt-10
                                  before:p-2 before:rounded before:invisible hover:before:visible"
                                >
                                  {conducta.titulo}
                                </span>
                              </button>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </td>

                  <td>
                    <div
                      onChange={(e) => setAlumnoSeleccionado(e.target.value)}
                      className="flex justify-end mb-5"
                    >
                      <input
                        required
                        id="id"
                        className=" w-5 h-5 ml-1 z-10 absolute opacity-0 peer cursor-pointer"
                        type="radio"
                        value={alumno.email}
                        name="numCuenta"
                      />
                      <RiDraftLine className="w-5 h-5 ml-1 z-0 absolute peer-checked:text-white peer-checked:bg-green-700 peer-checked:rounded" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default Tabla;
